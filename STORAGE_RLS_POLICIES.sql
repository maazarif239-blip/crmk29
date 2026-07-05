-- Storage RLS Policies for Media Bucket
-- Run in Supabase SQL Editor
-- =============================================

-- Enable RLS on storage.objects
ALTER TABLE storage.objects ENABLE ROW LEVEL SECURITY;

-- 1. Public Read Access (only to media bucket)
DROP POLICY IF EXISTS "Public can view media bucket objects" ON storage.objects;
CREATE POLICY "Public can view media bucket objects"
  ON storage.objects
  FOR SELECT
  TO public
  USING (bucket_id = 'media');

-- 2. Authenticated Users Can Upload to Media Bucket
DROP POLICY IF EXISTS "Authenticated users can upload to media bucket" ON storage.objects;
CREATE POLICY "Authenticated users can upload to media bucket"
  ON storage.objects
  FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'media');

-- 3. Authenticated Users Can Update Media Bucket Objects
DROP POLICY IF EXISTS "Authenticated users can update media bucket objects" ON storage.objects;
CREATE POLICY "Authenticated users can update media bucket objects"
  ON storage.objects
  FOR UPDATE
  TO authenticated
  USING (bucket_id = 'media')
  WITH CHECK (bucket_id = 'media');

-- 4. Authenticated Users Can Delete Media Bucket Objects
DROP POLICY IF EXISTS "Authenticated users can delete media bucket objects" ON storage.objects;
CREATE POLICY "Authenticated users can delete media bucket objects"
  ON storage.objects
  FOR DELETE
  TO authenticated
  USING (bucket_id = 'media');
