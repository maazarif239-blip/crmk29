-- Fix Promotions RLS and adjust getActive query
-- First, update RLS policy for promotions to allow authenticated users to read all promotions (for admin)
DROP POLICY IF EXISTS "Allow public read on active promotions" ON promotions;
DROP POLICY IF EXISTS "Allow authenticated admins full access on promotions" ON promotions;

-- Allow public read on active promotions
CREATE POLICY "Allow public read on active promotions"
  ON promotions FOR SELECT
  USING (
    (active = true OR enabled = true) AND
    (start_date IS NULL OR start_date <= NOW()) AND
    (end_date IS NULL OR end_date >= NOW())
  );

-- Allow authenticated users full access on promotions (for admin)
CREATE POLICY "Allow authenticated users full access on promotions"
  ON promotions FOR ALL
  USING (auth.uid() IS NOT NULL);
