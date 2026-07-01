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

-- RLS Policies
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE media ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Allow public read access to published products and categories
CREATE POLICY "Allow public read-only access on categories" ON categories FOR SELECT USING (true);
CREATE POLICY "Allow public read-only access on published products" ON products FOR SELECT USING (status = 'published');
CREATE POLICY "Allow public read-only access on media" ON media FOR SELECT USING (true);

-- Allow authenticated users (admins) full access
CREATE POLICY "Allow full access for authenticated users on categories" ON categories FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Allow full access for authenticated users on products" ON products FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Allow full access for authenticated users on media" ON media FOR ALL USING (auth.role() = 'authenticated');

-- Function to auto-update updated_at on products
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

-- Note: Don't forget to create a storage bucket named "media" in your Supabase dashboard
-- and set it to public. Add policies to allow authenticated users to upload/delete,
-- and public to read.
