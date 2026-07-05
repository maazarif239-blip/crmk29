# Media Storage & RLS Policy Setup Guide

To complete the Media Manager setup, please follow these EXACT steps in your Supabase Dashboard:

---

## Step 1: Verify or Create the Media Storage Bucket
1. Navigate to your Supabase Project → **Storage**
2. If you don't see a bucket named `media`:
   - Click **New bucket**
   - Bucket name: `media`
   - Toggle **Public bucket** to **Yes**
   - Click **Create bucket**

---

## Step 2: Set Storage RLS Policies (Bucket-Specific, Exact Definitions)
### How to Add These Policies:
1. Go to **SQL Editor** in your Supabase Project (icon looks like >_)
2. Click **New query**
3. Paste the ENTIRE SQL block below
4. Click **Run**

```sql
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
```

---

## Step 3: Verify Everything Works
1. Go back to your app and try uploading an image via Media Manager
2. Check for console errors:
   - If no errors appear, you're done!
   - If you still get errors, refresh your browser and try again

---
## Files Created/Updated
- [STORAGE_SETUP_GUIDE.md](file:///e:/crm/STORAGE_SETUP_GUIDE.md) (this file!)
- [MEDIA_TABLE_FIXES.sql](file:///e:/crm/MEDIA_TABLE_FIXES.sql) (database setup)

