-- Run this script in your Supabase SQL Editor to make 100% sure everything's okay!
-- Enable uuid-ossp extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create media table IF NOT EXISTS
CREATE TABLE IF NOT EXISTS media (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  file_name TEXT NOT NULL,
  file_path TEXT NOT NULL,
  file_size BIGINT,
  mime_type TEXT,
  public_url TEXT NOT NULL,
  file_url TEXT,
  media_key TEXT UNIQUE,
  bucket TEXT DEFAULT 'media',
  uploaded_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create indexes if not exist
DO $$
BEGIN
  IF NOT EXISTS (SELECT indexname FROM pg_indexes WHERE indexname = 'idx_media_media_key') THEN
    CREATE INDEX idx_media_media_key ON media(media_key);
  END IF;
  IF NOT EXISTS (SELECT indexname FROM pg_indexes WHERE indexname = 'idx_media_bucket') THEN
    CREATE INDEX idx_media_bucket ON media(bucket);
  END IF;
  IF NOT EXISTS (SELECT indexname FROM pg_indexes WHERE indexname = 'idx_media_uploaded_at') THEN
    CREATE INDEX idx_media_uploaded_at ON media(uploaded_at DESC);
  END IF;
END $$;

-- Create update_modified_column function if not exists
CREATE OR REPLACE FUNCTION update_modified_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply trigger to media
DROP TRIGGER IF EXISTS update_media_modtime ON media;
CREATE TRIGGER update_media_modtime
  BEFORE UPDATE ON media
  FOR EACH ROW EXECUTE FUNCTION update_modified_column();

-- Enable RLS
ALTER TABLE media ENABLE ROW LEVEL SECURITY;

-- Recreate policies to be sure
DROP POLICY IF EXISTS "Public can view media" ON media;
DROP POLICY IF EXISTS "Authenticated users can manage media" ON media;

CREATE POLICY "Public can view media"
  ON media
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can manage media"
  ON media
  FOR ALL
  TO authenticated
  USING (auth.uid() IS NOT NULL)
  WITH CHECK (auth.uid() IS NOT NULL);

-- Refresh schema cache
NOTIFY pgrst, 'reload schema';
