-- Add media_key column to media table
ALTER TABLE media ADD COLUMN IF NOT EXISTS media_key TEXT UNIQUE;
CREATE INDEX IF NOT EXISTS idx_media_media_key ON media(media_key);
