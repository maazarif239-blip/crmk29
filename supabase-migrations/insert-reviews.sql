-- Insert existing testimonials from hardcoded data into reviews table
-- Run this in Supabase SQL Editor before testing

INSERT INTO reviews (name, label, review_text, rating, published, sort_order) VALUES
('Anees Khan', 'Google Review · 4 months ago', 'Outstanding quality and a wide range of furniture available. Completely satisfied with my experience at HB Furniture. Alhamdulillah.', 5, true, 1),
('Abrar Abbasi', 'Google Review · 5 months ago', 'HB Furniture manufactures an impressive range of office furniture. 100% recommended. Thank you for your excellent services!', 5, true, 2),
('Nambeela Bebe', 'Google Review · 9 months ago', 'Great work by HB Furniture! I'm really happy with the service I received. They paid attention to every detail and made sure everything turned out exactly the way I wanted.', 5, true, 3),
('Muhammad Rahan', 'Google Review · 9 months ago', 'I'm beyond impressed! From the moment I walked into their showroom, the staff was incredibly helpful, knowledgeable, and genuinely focused on helping me find exactly what I needed.', 5, true, 4),
('Dua Aaay', 'Google Review · 3 months ago', 'Good furniture and an excellent overall experience. Simple, smooth, and exactly what I was looking for.', 5, true, 5),
('Salman Iron', 'Google Review · 9 months ago', 'A unique blend of professionalism, quality, and affordability. Mr. Hisham is a thorough gentleman and a true expert of his craft. Strongly recommended.', 5, true, 6),
('Azeem Khan', 'Google Review · 10 months ago', 'From start to finish, everything was handled with professionalism and care. The furniture is outstanding — sturdy, stylish, and exactly what I wanted. Delivery was on time and setup was quick. Will definitely return!', 5, true, 7),
('Amat Hussain', 'Google Review · 10 months ago', 'Excellent selection of furniture at very reasonable prices. The chairs are incredibly comfortable. Highly recommended for anyone looking for quality at great value.', 5, true, 8),
('Tanveer Khan', 'Google Review · 9 months ago', 'I had a great experience working with HB Furniture. Their quality is outstanding — well-designed, durable, and delivered exactly on time. Great service and a truly professional team.', 5, true, 9),
('Raza Muhammad', 'Google Review · Local Guide · 11 months ago', 'The quality of their furniture is outstanding — durable, beautifully designed, and exactly as described. Customer service was professional throughout. Highly recommended for premium furniture at reasonable prices.', 5, true, 10),
('Mazhar Khan', 'Google Review · 9 months ago', 'Working with HB Furniture was a smooth and pleasant experience. Their craftsmanship is top-notch and the final product perfectly matched my expectations. On-time delivery and very responsive customer service.', 5, true, 11),
('Ali Qureshi', 'Google Review · 9 months ago', 'Genuinely impressed by HB Furniture. Their offerings are not only stylish and modern but crafted with high-quality materials ensuring durability and comfort. A wide variety of designs for every taste.', 5, true, 12);
