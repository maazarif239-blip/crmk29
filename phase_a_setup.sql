CREATE TABLE IF NOT EXISTS site_content (
  id uuid default gen_random_uuid() primary key,
  key text unique not null,
  group_name text,
  label text not null,
  value text not null,
  updated_at timestamp default now()
);

CREATE TABLE IF NOT EXISTS activity_log (
  id uuid default gen_random_uuid() primary key,
  action text not null,
  entity_type text,
  entity_id text,
  performed_by uuid references profiles(id),
  created_at timestamp default now()
);

ALTER TABLE site_content ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view site content"
ON site_content FOR SELECT USING (true);

CREATE POLICY "Admins can update site content"
ON site_content FOR UPDATE
USING (auth.uid() in (select id from profiles where role = 'admin'));

CREATE POLICY "Admins can insert site content"
ON site_content FOR INSERT
WITH CHECK (auth.uid() in (select id from profiles where role = 'admin'));

INSERT INTO site_content (key, group_name, label, value) VALUES
('home.hero.title', 'Homepage', 'Hero Title', 'Building Workspaces That Perform'),
('home.hero.subtitle', 'Homepage', 'Hero Subtitle', 'Since 1964'),
('home.hero.description', 'Homepage', 'Hero Description', 'Precision engineering meets architectural elegance. We deliver premium turnkey solutions for the modern corporate environment.'),
('home.hero.cta', 'Homepage', 'Hero CTA Button', 'Explore Office Sets'),
('home.legacy.title', 'Homepage', 'Legacy Section Title', 'A Legacy of Craftsmanship'),
('home.clients.title', 'Homepage', 'Clients Section Title', 'Trusted By Leading Organizations'),
('about.hero.title', 'About Page', 'Hero Title', 'A Legacy of Craftsmanship.<br/>A Future of Workspaces.'),
('about.hero.subtitle', 'About Page', 'Hero Subtitle', 'From a small 1964 workshop to Pakistan''s leading workspace execution partner.'),
('contact.hero.title', 'Contact Page', 'Hero Title', 'Let''s Build Your Workspace Together'),
('contact.hero.subtitle', 'Contact Page', 'Hero Subtitle', 'Get in touch with our corporate design team today')
ON CONFLICT (key) DO NOTHING;
