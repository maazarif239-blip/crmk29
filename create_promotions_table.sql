-- Enable uuid extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ===================================
-- CREATE PROMOTIONS TABLE
-- ===================================
CREATE TABLE IF NOT EXISTS promotions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  -- Old columns (backwards compatible)
  type TEXT, -- 'announcement_bar', 'popup', 'banner', 'sale_ribbon'
  content TEXT,
  cta_text TEXT,
  cta_link TEXT,
  image_url TEXT,
  enabled BOOLEAN DEFAULT false,
  schedule_enabled BOOLEAN DEFAULT false,
  display_order INTEGER DEFAULT 0,
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

-- ===================================
-- CREATE INDEXES
-- ===================================
CREATE INDEX IF NOT EXISTS idx_promotions_active ON promotions(active);
CREATE INDEX IF NOT EXISTS idx_promotions_enabled ON promotions(enabled);
CREATE INDEX IF NOT EXISTS idx_promotions_display_order ON promotions(display_order);

-- ===================================
-- CREATE TRIGGER FOR updated_at
-- ===================================
-- First create or replace the trigger function
CREATE OR REPLACE FUNCTION update_modified_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply trigger to promotions
DROP TRIGGER IF EXISTS update_promotions_modtime ON promotions;
CREATE TRIGGER update_promotions_modtime
  BEFORE UPDATE ON promotions
  FOR EACH ROW EXECUTE FUNCTION update_modified_column();

-- ===================================
-- ROW LEVEL SECURITY (RLS)
-- ===================================
ALTER TABLE promotions ENABLE ROW LEVEL SECURITY;

-- ===================================
-- RLS POLICIES FOR PROMOTIONS
-- ===================================
-- Allow public read on active/enabled promotions that are within schedule
DROP POLICY IF EXISTS "Allow public read on active promotions" ON promotions;
CREATE POLICY "Allow public read on active promotions"
  ON promotions FOR SELECT
  USING (
    (active = true OR enabled = true) AND
    (start_date IS NULL OR start_date <= NOW()) AND
    (end_date IS NULL OR end_date >= NOW())
  );

-- Allow authenticated users full access on promotions (for admin)
DROP POLICY IF EXISTS "Allow authenticated users full access on promotions" ON promotions;
CREATE POLICY "Allow authenticated users full access on promotions"
  ON promotions FOR ALL
  USING (auth.uid() IS NOT NULL);
