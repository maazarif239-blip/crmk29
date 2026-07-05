-- Insert all website content items
INSERT INTO website_content (content_key, content_value, content_type, group_name, label, description) VALUES
-- Home page
('home.hero.background_image', 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2000&q=80', 'image', 'home', 'Hero Background Image', 'Background image for the home page hero section'),
('home.hero.subtitle', 'Since 1964', 'text', 'home', 'Hero Subtitle', 'Subtitle for home page hero'),
('home.hero.title', 'Building Workspaces That Perform', 'text', 'home', 'Hero Title', 'Main title for home page hero'),
('home.hero.description', 'Precision engineering meets architectural elegance. We deliver premium turnkey solutions for the modern corporate environment.', 'text', 'home', 'Hero Description', 'Description text for home page hero'),
('home.hero.cta_link', '/products/office-sets', 'text', 'home', 'Hero CTA Link', 'URL for hero call-to-action button'),
('home.hero.cta_text', 'Explore Office Sets', 'text', 'home', 'Hero CTA Text', 'Text for hero call-to-action button'),
('home.stats.stat1.value', '60+', 'text', 'home', 'Stat 1 Value', 'First statistic value on home page'),
('home.stats.stat1.label', 'Years of Heritage', 'text', 'home', 'Stat 1 Label', 'Label for first statistic on home page'),
('home.stats.stat2.value', '300+', 'text', 'home', 'Stat 2 Value', 'Second statistic value on home page'),
('home.stats.stat2.label', 'Corporate Clients', 'text', 'home', 'Stat 2 Label', 'Label for second statistic on home page'),
('home.stats.stat3.value', '500+', 'text', 'home', 'Stat 3 Value', 'Third statistic value on home page'),
('home.stats.stat3.label', 'Workspaces Delivered', 'text', 'home', 'Stat 3 Label', 'Label for third statistic on home page'),
('home.legacy.title', 'A Legacy of Craftsmanship', 'text', 'home', 'Legacy Section Title', 'Title for legacy section on home page'),
('home.legacy.description1', 'Founded by Mr. Tahir Hassan Gardezi, HB Furniture has stood as a paragon of industrial excellence since 1964. What began as a visionary pursuit of quality has evolved into a comprehensive institution for workspace creation.', 'text', 'home', 'Legacy Description 1', 'First paragraph for legacy section on home page'),
('home.legacy.description2', 'Our approach blends heritage manufacturing principles with cutting-edge architectural design. We don''t just supply furniture; we engineer environments that foster productivity, well-being, and corporate prestige.', 'text', 'home', 'Legacy Description 2', 'Second paragraph for legacy section on home page'),
('home.legacy.image', 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80', 'image', 'home', 'Legacy Section Image', 'Image for legacy section on home page'),
('home.clients.subtitle', 'Our Prestige Clients', 'text', 'home', 'Clients Section Subtitle', 'Subtitle for clients section on home page'),
('home.clients.title', 'Trusted By Leading Organizations', 'text', 'home', 'Clients Section Title', 'Title for clients section on home page'),
('home.clients.description', 'Highlight that HB Furniture has successfully delivered workspace solutions for respected organizations across multiple industries.', 'text', 'home', 'Clients Section Description', 'Description for clients section on home page'),
('home.cta.background_image', 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2000&q=80', 'image', 'home', 'CTA Background Image', 'Background image for call-to-action section on home page'),
('home.cta.subtitle', 'Let''s Create Something Great Together', 'text', 'home', 'CTA Subtitle', 'Subtitle for call-to-action section on home page'),
('home.cta.title', 'Ready To Transform Your Workspace?', 'text', 'home', 'CTA Title', 'Title for call-to-action section on home page'),
('home.cta.description', 'From executive offices to complete workplace solutions, HB Furniture helps organizations create productive environments that inspire performance.', 'text', 'home', 'CTA Description', 'Description for call-to-action section on home page'),
('home.cta.cta_link', '/contact', 'text', 'home', 'CTA Link', 'URL for call-to-action button on home page'),
('home.cta.cta_text', 'Request Consultation', 'text', 'home', 'CTA Text', 'Text for call-to-action button on home page'),

-- About page
('about.hero.title', 'A Legacy of Craftsmanship.\nA Future of Workspaces.', 'text', 'about', 'About Hero Title', 'Title for about page hero'),
('about.hero.subtitle', 'From a small 1964 workshop to Pakistan''s leading workspace execution partner.', 'text', 'about', 'About Hero Subtitle', 'Subtitle for about page hero'),
('about.foundation.title', 'The Foundation of Excellence', 'text', 'about', 'Foundation Section Title', 'Title for foundation section on about page'),
('about.foundation.description1', 'Founded in 1964 by Mr. Tahir Hassan Gardezi at the ambitious age of 23, HB Furniture began with a singular vision: to bring uncompromising European craftsmanship to Pakistan. Trained extensively in Sweden, Mr. Gardezi instilled a culture of precision and structural integrity that remains the bedrock of our operations today.', 'text', 'about', 'Foundation Description 1', 'First paragraph for foundation section on about page'),
('about.foundation.description2', 'Over the decades, we have evolved from a bespoke workshop into a formidable turnkey execution partner. Now under second-generation leadership, we blend heritage woodworking techniques with state-of-the-art architectural technology to deliver workspaces that define corporate legacy.', 'text', 'about', 'Foundation Description 2', 'Second paragraph for foundation section on about page'),

-- Contact page
('contact.hero.title', 'Let''s Build Your Workspace Together', 'text', 'contact', 'Contact Hero Title', 'Title for contact page hero'),
('contact.hero.subtitle', 'Get in touch with our corporate design team today', 'text', 'contact', 'Contact Hero Subtitle', 'Subtitle for contact page hero'),
('contact.details.title', 'Reach Out to Us', 'text', 'contact', 'Contact Details Title', 'Title for contact details section'),
('contact.details.description', 'Connect directly with our team for quick support, consultation, or project inquiries.', 'text', 'contact', 'Contact Details Description', 'Description for contact details section'),
('contact.map.title', 'Our Headquarters & Factory', 'text', 'contact', 'Map Section Title', 'Title for map section on contact page'),
('contact.map.location', 'Islamabad', 'text', 'contact', 'Map Location', 'Location text for map section'),

-- Clientage page
('clientage.hero.title', 'HB Clientage', 'text', 'clientage', 'Clientage Hero Title', 'Title for clientage page hero'),
('clientage.hero.description', 'Our valued clients and trusted partnerships built through excellence and commitment.', 'text', 'clientage', 'Clientage Hero Description', 'Description for clientage page hero'),
('clientage.featured.subtitle', 'Featured Partnerships', 'text', 'clientage', 'Featured Subtitle', 'Subtitle for featured partnerships section'),
('clientage.featured.title', 'Defining Corporate Legacy', 'text', 'clientage', 'Featured Title', 'Title for featured partnerships section'),
('clientage.clients.title', 'Our Esteemed Clients', 'text', 'clientage', 'Clients Title', 'Title for clients section'),
('clientage.cta.title', 'Join Our Growing List of Partners', 'text', 'clientage', 'CTA Title', 'Title for call-to-action section on clientage page'),
('clientage.cta.description', 'We bring decades of manufacturing expertise and project execution to every space we furnish. Let us build your corporate legacy together.', 'text', 'clientage', 'CTA Description', 'Description for call-to-action section on clientage page'),

-- Management & Employees page
('management-employees.hero.subtitle', 'Our Organization', 'text', 'management-employees', 'Management Hero Subtitle', 'Subtitle for management page hero'),
('management-employees.hero.title', 'Management & Employees', 'text', 'management-employees', 'Management Hero Title', 'Title for management page hero'),
('management-employees.hero.description', 'Meet the dedicated leadership team and professionals who drive our organization forward with uncompromising standards in furniture manufacturing and architectural design.', 'text', 'management-employees', 'Management Hero Description', 'Description for management page hero'),

-- Field of Expertise page
('field-of-expertise.hero.title', 'Field of Expertise', 'text', 'field-of-expertise', 'Field of Expertise Hero Title', 'Title for field of expertise page hero'),
('field-of-expertise.hero.description', 'Delivering specialized expertise through innovation, technical excellence, and years of industry experience.', 'text', 'field-of-expertise', 'Field of Expertise Hero Description', 'Description for field of expertise page hero'),
('field-of-expertise.intro.subtitle', 'What We Excel At', 'text', 'field-of-expertise', 'Intro Subtitle', 'Subtitle for intro section on field of expertise page'),
('field-of-expertise.intro.description', 'Crafting exceptional workspaces since 1964 with precision, innovation, and enduring quality.', 'text', 'field-of-expertise', 'Intro Description', 'Description for intro section on field of expertise page'),
('field-of-expertise.cta.title', 'Let''s Turn Expertise Into Results', 'text', 'field-of-expertise', 'CTA Title', 'Title for call-to-action section on field of expertise page'),
('field-of-expertise.cta.cta_text', 'Contact Us', 'text', 'field-of-expertise', 'CTA Text', 'Text for call-to-action button on field of expertise page'),

-- Footer
('footer_tagline', 'Crafting inspired workspaces with innovative furniture solutions designed for comfort, style and productivity.', 'text', 'footer', 'Footer Tagline', 'Tagline text for the global footer'),
('footer.description', 'Crafting inspired workspaces with innovative furniture solutions designed for comfort, style and productivity.', 'text', 'footer', 'Footer Description', 'Description text for the global footer'),

-- About page (additional items)
('about.milestones.title', 'Milestones of Progress', 'text', 'about', 'Milestones Title', 'Title for milestones section'),
('about.milestones.1964.description', 'Founded by Mr. Tahir Hassan Gardezi in Karachi.', 'text', 'about', '1964 Milestone', 'Description for 1964 milestone'),
('about.milestones.1977.description', 'Landmark BOT/B contract awards for Pakistan Steel Mills, establishing industrial capability.', 'text', 'about', '1977 Milestone', 'Description for 1977 milestone'),
('about.milestones.1993.description', 'Premium 3-storey flagship showroom opened in the heart of Islamabad.', 'text', 'about', '1993 Milestone', 'Description for 1993 milestone'),
('about.milestones.2024.description', 'New generation leadership drives expansion across a premium corporate project portfolio.', 'text', 'about', '2024 Milestone', 'Description for 2024 milestone'),
('about.why_choose.title', 'Why Choose HB Furniture', 'text', 'about', 'Why Choose Us Title', 'Title for why choose us section'),
('about.why_choose.item1.title', '60+ Years of Proven Excellence', 'text', 'about', 'Why Choose Item 1 Title', 'Title for first why choose us item'),
('about.why_choose.item1.description', "Partnering with Pakistan's top organizations since 1964.", 'text', 'about', 'Why Choose Item 1 Description', 'Description for first why choose us item'),
('about.why_choose.item2.title', 'Complete In-House Manufacturing', 'text', 'about', 'Why Choose Item 2 Title', 'Title for second why choose us item'),
('about.why_choose.item2.description', 'HB provides strict end-to-end (E2E) quality control.', 'text', 'about', 'Why Choose Item 2 Description', 'Description for second why choose us item'),
('about.why_choose.item3.title', 'End-to-End Turnkey Delivery', 'text', 'about', 'Why Choose Item 3 Title', 'Title for third why choose us item'),
('about.why_choose.item3.description', 'Design, produce, install — we take total ownership.', 'text', 'about', 'Why Choose Item 3 Description', 'Description for third why choose us item'),
('about.why_choose.item4.title', 'Custom Built for Your Space', 'text', 'about', 'Why Choose Item 4 Title', 'Title for fourth why choose us item'),
('about.why_choose.item4.description', 'Every project engineered to your exact specifications.', 'text', 'about', 'Why Choose Item 4 Description', 'Description for fourth why choose us item'),
('about.why_choose.item5.title', '300+ Satisfied Clients', 'text', 'about', 'Why Choose Item 5 Title', 'Title for fifth why choose us item'),
('about.why_choose.item5.description', 'From multinationals to ministries, we deliver excellence.', 'text', 'about', 'Why Choose Item 5 Description', 'Description for fifth why choose us item'),
('about.why_choose.item6.title', 'Reliable, Consistent, On Schedule', 'text', 'about', 'Why Choose Item 6 Title', 'Title for sixth why choose us item'),
('about.why_choose.item6.description', 'Deadlines met. Standards never compromised.', 'text', 'about', 'Why Choose Item 6 Description', 'Description for sixth why choose us item'),
('about.cta.title', 'Ready to Build Your Legacy?', 'text', 'about', 'About CTA Title', 'Title for about page call to action'),
('about.cta.cta_text', 'Discuss Your Project', 'text', 'about', 'About CTA Text', 'Text for about page call to action button')

ON CONFLICT (content_key) DO UPDATE SET 
  content_value = EXCLUDED.content_value,
  content_type = EXCLUDED.content_type,
  group_name = EXCLUDED.group_name,
  label = EXCLUDED.label,
  description = EXCLUDED.description,
  updated_at = NOW();
