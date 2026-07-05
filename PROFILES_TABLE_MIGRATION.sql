
-- ========================================================
-- PROFILES TABLE MIGRATION
-- ========================================================

-- Add missing columns if they don't exist
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS email TEXT;
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS full_name TEXT;
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS name TEXT;
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL;
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL;
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS avatar_url TEXT;

-- ========================================================
-- FUNCTION & TRIGGER TO SYNC auth.users.email to profiles.email ON SIGNUP
-- ========================================================

CREATE OR REPLACE FUNCTION public.handle_new_user_email()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE public.profiles 
  SET 
    email = new.email,
    full_name = COALESCE(new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'name'),
    name = COALESCE(new.raw_user_meta_data->>'name', new.raw_user_meta_data->>'full_name')
  WHERE id = new.id;
  
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE TRIGGER on_auth_user_email_sync
AFTER INSERT ON auth.users
FOR EACH ROW EXECUTE FUNCTION public.handle_new_user_email();

-- ========================================================
-- ONE-TIME BACKFILL FOR EXISTING USERS' EMAILS
-- ========================================================

UPDATE profiles p 
SET 
  email = u.email,
  full_name = COALESCE(p.full_name, p.name, u.raw_user_meta_data->>'full_name', u.raw_user_meta_data->>'name'),
  name = COALESCE(p.name, p.full_name, u.raw_user_meta_data->>'name', u.raw_user_meta_data->>'full_name')
FROM auth.users u 
WHERE p.id = u.id;

-- ========================================================
-- RLS POLICIES FOR PROFILES TABLE (ADMIN-ONLY MANAGEMENT)
-- ========================================================

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Admins can view all profiles" ON profiles;
CREATE POLICY "Admins can view all profiles"
ON profiles FOR SELECT
USING (auth.uid() IN (SELECT id FROM profiles WHERE role = 'admin'));

DROP POLICY IF EXISTS "Admins can update user roles" ON profiles;
CREATE POLICY "Admins can update user roles"
ON profiles FOR UPDATE
USING (auth.uid() IN (SELECT id FROM profiles WHERE role = 'admin'));

-- ========================================================
-- UPDATE MODIFIED COLUMN TRIGGER FOR profiles
-- ========================================================

CREATE OR REPLACE FUNCTION public.update_modified_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS update_profiles_modtime ON profiles;
CREATE TRIGGER update_profiles_modtime
BEFORE UPDATE ON profiles
FOR EACH ROW EXECUTE FUNCTION update_modified_column();

