-- Insert existing management team data into site_content table
-- Run this in Supabase SQL Editor before testing

INSERT INTO site_content (key, value)
VALUES (
  'management_team',
  '[
    {
      "name": "Mr. Hasan Ahmed Gardezi",
      "role": "C.E.O, HB FURNITURE",
      "description": "Bachelor in Business Administration with over fifteen years of experience in Sales & Production Management, Material Procurement & Site Supervision."
    },
    {
      "name": "Syeda Hoor Hassan Gardezi",
      "role": "ARCHITECT, CAD EXPERT",
      "description": "Syeda Hoor Hassan Gardezi is diploma holder in architectural technology, educated from Humber Institute of Technology in Toronto, Canada, having a three year experience working as an assistant manager at Bell Canada."
    },
    {
      "name": "Mr. Danyal Hassan Gardezi",
      "role": "DIRECTOR OPERATIONS",
      "description": "Managing daily operations with dedication, he ensures projects are completed smoothly, efficiently, and on time."
    },
    {
      "name": "Syed Habib Hasan Gardezi",
      "role": "Social Media Manager",
      "description": "Helping strengthen the company''s online presence through creative content and meaningful engagement with customers and audiences."
    },
    {
      "name": "Mr. Syed Ali Naqvi",
      "role": "MANAGER MARKETING",
      "description": "Focused on growing the brand and building strong relationships through effective marketing and customer-focused strategies."
    },
    {
      "name": "Syed Hasham Hasan Gardezi",
      "role": "Director (Sales & Marketing)",
      "description": "Leading sales and marketing efforts while working to expand the company''s reach and maintain strong client partnerships."
    },
    {
      "name": "Mr. Syed Shabbaz",
      "role": "QUALITY CONTROL MANAGER",
      "description": "Ensuring every product meets high standards by maintaining quality, consistency, and attention to detail."
    },
    {
      "name": "Mr. Khuram",
      "role": "SITE SUPERVISOR",
      "description": "Overseeing site activities and making sure projects are carried out safely, smoothly, and on schedule."
    },
    {
      "name": "Mr. Bilal Yasir",
      "role": "MANAGER ADMIN",
      "description": "Managing administrative tasks and supporting smooth coordination across different departments."
    },
    {
      "name": "Mr. Abdullah Haneef",
      "role": "ACCOUNTS OFFICER",
      "description": "Handling financial records and daily accounts with accuracy and professionalism."
    },
    {
      "name": "Mr. Zaid Khalid",
      "role": "AUTOCAD OPERATOR / 3D GRAPHICS EXPERT",
      "description": "Creating detailed drawings and realistic 3D designs to turn ideas into practical solutions."
    },
    {
      "name": "Mr. Usama Akram",
      "role": "MARKETING EXECUTIVE",
      "description": "Supporting business growth by connecting with clients and promoting the company''s services."
    },
    {
      "name": "Mr. Yahya Abbas",
      "role": "MARKETING EXECUTIVE",
      "description": "Building customer relationships and helping expand the company''s presence in the market."
    },
    {
      "name": "Mr. Saad Saleem",
      "role": "MARKETING EXECUTIVE",
      "description": "Contributing to business development through effective communication and customer engagement."
    },
    {
      "name": "Mr. Usman Akhtar",
      "role": "CNC TECHNOLOGIST",
      "description": "Working with advanced machinery to ensure precision and quality in production."
    },
    {
      "name": "Mr. Zaman Tariq",
      "role": "FOREMAN",
      "description": "Leading the workforce and ensuring smooth and efficient operations on the production floor."
    },
    {
      "name": "Mr. Azan Yaseen",
      "role": "SUPERVISOR",
      "description": "Monitoring daily activities and helping maintain quality and efficiency in every task."
    }
  ]'::jsonb
)
ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value;
