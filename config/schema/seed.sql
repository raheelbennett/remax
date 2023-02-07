INSERT INTO categories (name, featured)
VALUES
('Grocery', true),
('Recurring Bill', true),
('Furniture', false),
('Drug Store', false),
('Restaurants', true),
('Home Improvement', false),
('Hotel', false),
('Entertainment', false),
('Gas', true),
('Transit', true),
('Other', false),
('USD', false);


INSERT INTO banks (name)
VALUES
('Capital One'),
('AMEX'),
('Tangerine'),
('CIBC'),
('RBC'),
('Scotiabank'),
('Rogers'),
('MBNA'),
('BMO'),
('TD'),
('Desjardins'),
('Canadian Tire'),
('National Bank'),
('PC Financial');

INSERT INTO users (name, email, password)
VALUES
('John Doe', 'test@remax.com', 'password');

INSERT INTO cards (name, interest_rate, annual_fee, bank_id, featured, img_url)
VALUES
('BMO CashBack World Elite Mastercard',20.99, 120, 9, true, 'bmo-cash-back-world-elite.webp'),
('Rogers World Elite Mastercard',19.99,0.00,7, true, 'rogers-world-elite.png' ),
('AMEX SimplyCash Preferred Card', 20.99, 119.88, 2, true, 'amex-simplycash-preferred.png'),
('Tangerine World Mastercard',19.95,0.00,3, true, 'tangerine-world.png'),
('Amazon.ca Rewards Mastercard',19.99, 0.00,8, true, 'amazon-rewards.png'),
('AMEX Air Miles Platinum Card', 20.99, 119.88, 2, true, 'amex-air-miles-platinum.png'),
('RBC Avion Infinite VISA', 19.99, 119.88, 5, true, 'rbc-avion-infinite.png'),
('AMEX Green Card', 20.99, 0.00, 2, true, 'amex-green.png');

INSERT INTO rewards (reward_rate, card_id,category_id)
VALUES
(5,1,1), 
(4,1,10),
(3,1,9),
(2,1,2),
(1,1,11),
(1.5,2,11), 
(3,2,12),
(4,3,9), 
(4,3,1),
(2,3,11),
(2,4,1), 
(2,4,2),
(2,4,3),
(2,4,4),
(2,4,5),
(2,4,6),
(2,4,7),
(2,4,8),
(2,4,9),
(2,4,10),
(0.5,4,11),
(2.5,5,12),
(2.3,6,5),
(2.3,6,9),
(2.3,6,10),
(1,6,11),
(1,7,11),
(1,8,11),
(2,8,7),
(1,5,11);


INSERT INTO vendors (name,category_id, featured, img_url, relative_link)
VALUES
('Home Depot', 6, false,'home-depot.png','/vendor/home-depot'),
('Amazon',11, true, 'amazon.png', '/vendor/amazon' ),
('Telus', 2, true,'telus.png','/vendor/telus'),
('Rogers',2, false, 'rogers.png', '/vendor/rogers'),
('McDonalds', 5, true, 'mcdonalds.png', '/vendor/mcdonalds'),
('The Keg', 5, true, 'the-keg.jpeg', '/vendor/the-keg'),
('Moxies', 5, true, 'moxies.jpeg', '/vendor/moxies'),
('Boston Pizza', 5, true, 'boston-pizza.png', '/vendor/boston-pizza'),
('Netflix', 8, true, 'netflix.png', '/vendor/netflix'),
('Disney Plus', 8, true, 'disney-plus.jpeg', '/vendor/disney-plus');
-- ('No Frills', 1, false),

-- ('Whole Foods', 1, true),
-- ('Metro', 1, true),
-- ('IGA', 1, true),
-- ('Food Basics', 1, false),

-- ('Crave TV', 8, false),
-- ('YouTube Premium', 8, false),
-- ('Spotify', 8, true),
-- ('Apple Music', 8, false),
-- ('Petro-Canada', 9, true),
-- ('Shell', 9, false),
-- ('Esso', 9, false),
-- ('Pioneer', 9, false),
-- ('Husky', 9, false),
-- ('Ultramar', 9, false),
-- ('Mobil', 9, false),
-- ('Ebay', 11, false); will add img_url and relative link later

INSERT INTO card_user(card_id,user_id)
VALUES
(1,1),
(4,1);

INSERT INTO listings(reward_rate, vendor , card_id)
VALUES
(2.5,2,5);