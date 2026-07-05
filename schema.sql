-- Enable uuid extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ===================================
-- TABLES
-- ===================================

-- 1. categories
CREATE TABLE IF NOT EXISTS categories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. media
CREATE TABLE IF NOT EXISTS media (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  -- Old columns (backwards compatible)
  file_name TEXT,
  file_path TEXT,
  file_size INTEGER,
  mime_type TEXT,
  public_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  -- New columns
  title TEXT,
  bucket TEXT NOT NULL,
  file_url TEXT NOT NULL,
  uploaded_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. products
CREATE TABLE IF NOT EXISTS products (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  -- Old columns (backwards compatible)
  slug TEXT NOT NULL UNIQUE,
  category_id UUID REFERENCES categories(id) ON DELETE SET NULL,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  featured BOOLEAN DEFAULT false,
  main_image TEXT, -- URL or path
  gallery TEXT[] DEFAULT '{}', -- Array of URLs
  -- New columns
  name TEXT,
  description TEXT,
  featured_image TEXT,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 4. website_content
CREATE TABLE IF NOT EXISTS website_content (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  -- Old columns (backwards compatible)
  content_key TEXT UNIQUE,
  content_value TEXT,
  content_type TEXT DEFAULT 'text', -- text, html, image, array, json
  group_name TEXT,
  label TEXT,
  description TEXT,
  -- New columns
  section TEXT, -- homepage, about, contact, footer, etc.
  title TEXT,
  subtitle TEXT,
  image TEXT,
  button_text TEXT,
  button_link TEXT,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 5. promotions
CREATE TABLE IF NOT EXISTS promotions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  -- Old columns (backwards compatible)
  type TEXT, -- 'announcement_bar', 'popup', 'banner', 'sale_ribbon'
  content TEXT,
  cta_text TEXT,
  cta_link TEXT,
  enabled BOOLEAN DEFAULT false,
  schedule_enabled BOOLEAN DEFAULT false,
  style TEXT,
  -- New columns
  title TEXT NOT NULL,
  description TEXT,
  ribbon_text TEXT,
  discount TEXT,
  banner_image TEXT,
  start_date TIMESTAMP WITH TIME ZONE,
  end_date TIMESTAMP WITH TIME ZONE,
  active BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 6. settings (using existing key-value pattern but expanding)
CREATE TABLE IF NOT EXISTS settings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  key TEXT NOT NULL UNIQUE,
  value TEXT,
  type TEXT NOT NULL DEFAULT 'text', -- text, json, boolean, image, number
  group_name TEXT NOT NULL, -- general, seo, social, theme
  label TEXT NOT NULL,
  description TEXT,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 7. user_profiles
CREATE TABLE IF NOT EXISTS user_profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  -- Old columns (backwards compatible)
  full_name TEXT,
  avatar_url TEXT,
  -- New columns
  name TEXT,
  email TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'editor' CHECK (role IN ('admin', 'editor')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ===================================
-- INDEXES
-- ===================================
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category_id);
CREATE INDEX IF NOT EXISTS idx_products_status ON products(status);
CREATE INDEX IF NOT EXISTS idx_products_sort ON products(sort_order);
CREATE INDEX IF NOT EXISTS idx_categories_sort ON categories(sort_order);
CREATE INDEX IF NOT EXISTS idx_website_content_section ON website_content(section);
CREATE INDEX IF NOT EXISTS idx_promotions_active ON promotions(active);
CREATE INDEX IF NOT EXISTS idx_media_bucket ON media(bucket);

-- ===================================
-- TRIGGER FOR updated_at
-- ===================================
CREATE OR REPLACE FUNCTION update_modified_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply trigger to all tables with updated_at
CREATE TRIGGER IF NOT EXISTS update_products_modtime
  BEFORE UPDATE ON products
  FOR EACH ROW EXECUTE FUNCTION update_modified_column();

CREATE TRIGGER IF NOT EXISTS update_website_content_modtime
  BEFORE UPDATE ON website_content
  FOR EACH ROW EXECUTE FUNCTION update_modified_column();

CREATE TRIGGER IF NOT EXISTS update_promotions_modtime
  BEFORE UPDATE ON promotions
  FOR EACH ROW EXECUTE FUNCTION update_modified_column();

CREATE TRIGGER IF NOT EXISTS update_user_profiles_modtime
  BEFORE UPDATE ON user_profiles
  FOR EACH ROW EXECUTE FUNCTION update_modified_column();

CREATE TRIGGER IF NOT EXISTS update_settings_modtime
  BEFORE UPDATE ON settings
  FOR EACH ROW EXECUTE FUNCTION update_modified_column();

-- ===================================
-- ROW LEVEL SECURITY (RLS)
-- ===================================
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE media ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE website_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE promotions ENABLE ROW LEVEL SECURITY;
ALTER TABLE settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;

-- ===================================
-- RLS POLICIES
-- ===================================

-- CATEGORIES
CREATE POLICY "Allow public read on categories"
  ON categories FOR SELECT
  USING (true);

CREATE POLICY "Allow authenticated admins full access on categories"
  ON categories FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE user_profiles.id = auth.uid() AND user_profiles.role = 'admin'
    )
  );

-- MEDIA
CREATE POLICY "Allow public read on media"
  ON media FOR SELECT
  USING (true);

CREATE POLICY "Allow authenticated admins full access on media"
  ON media FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE user_profiles.id = auth.uid() AND user_profiles.role = 'admin'
    )
  );

-- PRODUCTS
CREATE POLICY "Allow public read on published products"
  ON products FOR SELECT
  USING (status = 'published');

CREATE POLICY "Allow authenticated admins full access on products"
  ON products FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE user_profiles.id = auth.uid() AND user_profiles.role = 'admin'
    )
  );

-- WEBSITE_CONTENT
CREATE POLICY "Allow public read on website_content"
  ON website_content FOR SELECT
  USING (true);

CREATE POLICY "Allow authenticated admins full access on website_content"
  ON website_content FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE user_profiles.id = auth.uid() AND user_profiles.role = 'admin'
    )
  );

-- PROMOTIONS
CREATE POLICY "Allow public read on active promotions"
  ON promotions FOR SELECT
  USING (active = true);

CREATE POLICY "Allow authenticated admins full access on promotions"
  ON promotions FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE user_profiles.id = auth.uid() AND user_profiles.role = 'admin'
    )
  );

-- SETTINGS
CREATE POLICY "Allow public read on settings"
  ON settings FOR SELECT
  USING (true);

CREATE POLICY "Allow authenticated admins full access on settings"
  ON settings FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE user_profiles.id = auth.uid() AND user_profiles.role = 'admin'
    )
  );

-- USER_PROFILES
CREATE POLICY "Allow users to view own profile"
  ON user_profiles FOR SELECT
  USING (id = auth.uid());

CREATE POLICY "Allow users to update own profile"
  ON user_profiles FOR UPDATE
  USING (id = auth.uid());

CREATE POLICY "Allow admins full access on user_profiles"
  ON user_profiles FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE user_profiles.id = auth.uid() AND user_profiles.role = 'admin'
    )
  );

-- ===================================
-- NEW USER SIGNUP TRIGGER
-- ===================================
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.user_profiles (id, name, email, role)
  VALUES (
    NEW.id,
    NEW.raw_user_meta_data->>'name',
    NEW.email,
    -- Make first user an admin
    CASE WHEN (SELECT count(*) FROM public.user_profiles) = 0 THEN 'admin' ELSE 'editor' END
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Drop existing trigger if exists
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();

-- ===================================
-- DEFAULT SETTINGS
-- ===================================
INSERT INTO settings (key, value, type, group_name, label, description)
VALUES
  -- General Settings
  ('company_name', 'HB Furniture', 'text', 'general', 'Company Name', 'Your company name'),
  ('phone', '+1 234 567 890', 'text', 'general', 'Phone Number', 'Your contact phone number'),
  ('email', 'contact@hbfurniture.com', 'text', 'general', 'Email', 'Your contact email'),
  ('address', '123 Main Street, City, Country', 'text', 'general', 'Address', 'Your physical address'),
  ('business_hours', 'Monday-Friday: 9am-5pm', 'text', 'general', 'Business Hours', 'Your operating hours'),
  
  -- Social Links
  ('facebook_url', 'https://facebook.com/hbfurniture', 'text', 'social', 'Facebook URL', ''),
  ('instagram_url', 'https://instagram.com/hbfurniture', 'text', 'social', 'Instagram URL', ''),
  ('twitter_url', '', 'text', 'social', 'Twitter URL', ''),
  ('linkedin_url', '', 'text', 'social', 'LinkedIn URL', ''),
  ('youtube_url', '', 'text', 'social', 'YouTube URL', ''),
  
  -- SEO Settings
  ('seo_title', 'HB Furniture - Premium Furniture', 'text', 'seo', 'SEO Title', ''),
  ('seo_description', 'Discover premium furniture at HB Furniture', 'text', 'seo', 'SEO Description', ''),
  ('robots', 'index, follow', 'text', 'seo', 'Robots.txt', ''),
  
  -- Theme Settings
  ('logo', '', 'image', 'theme', 'Logo', 'Your main logo'),
  ('footer_logo', '', 'image', 'theme', 'Footer Logo', ''),
  ('favicon', '', 'image', 'theme', 'Favicon', 'Your favicon'),
  ('primary_color', '#EB5324', 'text', 'theme', 'Primary Color', 'Main brand color'),
  ('secondary_color', '#111827', 'text', 'theme', 'Secondary Color', 'Secondary brand color')
  
ON CONFLICT (key) DO NOTHING;
