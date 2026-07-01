-- Create Categories Table
CREATE TABLE categories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create Media Table
CREATE TABLE media (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  file_name TEXT NOT NULL,
  file_path TEXT NOT NULL,
  file_size INTEGER NOT NULL,
  mime_type TEXT NOT NULL,
  public_url TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create Products Table
CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  category_id UUID REFERENCES categories(id) ON DELETE SET NULL,
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  featured BOOLEAN NOT NULL DEFAULT false,
  seo_title TEXT,
  seo_description TEXT,
  main_image TEXT, -- URL or path
  gallery TEXT[] DEFAULT '{}', -- Array of URLs
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create Website Content Table (key-value store for all editable content)
CREATE TABLE website_content (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  content_key TEXT NOT NULL UNIQUE,
  content_value TEXT,
  content_type TEXT NOT NULL DEFAULT 'text', -- text, html, image, array, json
  group_name TEXT, -- for grouping related content (e.g., 'homepage', 'about', 'footer')
  label TEXT NOT NULL, -- user-friendly label for admin
  description TEXT, -- optional description for admin
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create Promotions Table
CREATE TABLE promotions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  type TEXT NOT NULL, -- 'announcement_bar', 'popup', 'banner', 'sale_ribbon'
  content TEXT,
  cta_text TEXT,
  cta_link TEXT,
  image_url TEXT,
  enabled BOOLEAN NOT NULL DEFAULT false,
  schedule_enabled BOOLEAN NOT NULL DEFAULT false,
  start_date TIMESTAMP WITH TIME ZONE,
  end_date TIMESTAMP WITH TIME ZONE,
  display_order INTEGER NOT NULL DEFAULT 0,
  style TEXT, -- JSON for custom styles
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- RLS Policies
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE media ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE website_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE promotions ENABLE ROW LEVEL SECURITY;

-- Allow public read access to published products, categories, media, website content, and active promotions
CREATE POLICY "Allow public read-only access on categories" ON categories FOR SELECT USING (true);
CREATE POLICY "Allow public read-only access on published products" ON products FOR SELECT USING (status = 'published');
CREATE POLICY "Allow public read-only access on media" ON media FOR SELECT USING (true);
CREATE POLICY "Allow public read-only access on website_content" ON website_content FOR SELECT USING (true);
CREATE POLICY "Allow public read-only access on promotions" ON promotions FOR SELECT USING (true);

-- Allow authenticated users (admins) full access
CREATE POLICY "Allow full access for authenticated users on categories" ON categories FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Allow full access for authenticated users on products" ON products FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Allow full access for authenticated users on media" ON media FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Allow full access for authenticated users on website_content" ON website_content FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Allow full access for authenticated users on promotions" ON promotions FOR ALL USING (auth.role() = 'authenticated');

-- Function to auto-update updated_at on products, website_content, and promotions
CREATE OR REPLACE FUNCTION update_modified_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_products_modtime
    BEFORE UPDATE ON products
    FOR EACH ROW
    EXECUTE PROCEDURE update_modified_column();

CREATE TRIGGER update_website_content_modtime
    BEFORE UPDATE ON website_content
    FOR EACH ROW
    EXECUTE PROCEDURE update_modified_column();

CREATE TRIGGER update_promotions_modtime
    BEFORE UPDATE ON promotions
    FOR EACH ROW
    EXECUTE PROCEDURE update_modified_column();

-- Note: Don't forget to create a storage bucket named "media" in your Supabase dashboard
-- and set it to public. Add policies to allow authenticated users to upload/delete,
-- and public to read.

-- Create User Profiles Table
CREATE TABLE user_profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  role TEXT NOT NULL DEFAULT 'editor' CHECK (role IN ('admin', 'editor')),
  full_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create Settings Table
CREATE TABLE settings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  key TEXT NOT NULL UNIQUE,
  value TEXT,
  type TEXT NOT NULL DEFAULT 'text', -- text, json, boolean, image
  group_name TEXT NOT NULL, -- seo, general, theme
  label TEXT NOT NULL,
  description TEXT,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- RLS Policies
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE settings ENABLE ROW LEVEL SECURITY;

-- Allow public read access to settings
CREATE POLICY "Allow public read-only access on settings" ON settings FOR SELECT USING (true);

-- Allow admins full access to user_profiles and settings
CREATE POLICY "Allow admins full access to user_profiles" ON user_profiles FOR ALL USING (
  (SELECT role FROM user_profiles WHERE id = auth.uid()) = 'admin'
);
CREATE POLICY "Allow admins full access to settings" ON settings FOR ALL USING (
  (SELECT role FROM user_profiles WHERE id = auth.uid()) = 'admin'
);

-- Allow users to view all profiles, but only edit their own
CREATE POLICY "Allow users to view all profiles" ON user_profiles FOR SELECT USING (auth.role() = 'authenticated');
CREATE POLICY "Allow users to update own profile" ON user_profiles FOR UPDATE USING (id = auth.uid());

-- Allow editors to update settings
CREATE POLICY "Allow editors full access to settings" ON settings FOR ALL USING (
  (SELECT role FROM user_profiles WHERE id = auth.uid()) = 'editor'
);

-- Trigger for user_profiles updated_at
CREATE TRIGGER update_user_profiles_modtime
    BEFORE UPDATE ON user_profiles
    FOR EACH ROW
    EXECUTE PROCEDURE update_modified_column();

-- Trigger for settings updated_at
CREATE TRIGGER update_settings_modtime
    BEFORE UPDATE ON settings
    FOR EACH ROW
    EXECUTE PROCEDURE update_modified_column();

-- Function to handle new user signup
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.user_profiles (id, full_name, avatar_url, role)
  VALUES (
    NEW.id,
    NEW.raw_user_meta_data->>'full_name',
    NEW.raw_user_meta_data->>'avatar_url',
    -- Make the first user an admin
    CASE WHEN (SELECT count(*) FROM public.user_profiles) = 0 THEN 'admin' ELSE 'editor' END
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to call handle_new_user when a user is created
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE handle_new_user();
