INSERT INTO categories (name, featured)
VALUES
('Grocery', true),
('Recurring Bill', true),
('Furniture', false),
('Drug Store', false),
('Restaurants', true),
('Home Improvement', false),
('Hotel', false),
('Entertainment', true),
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

INSERT INTO cards (name, interest_rate, annual_fee, bank_id, featured, img_url, link)
VALUES
('BMO World Elite Mastercard',20.99, 120, 9, true, 'bmo-cash-back-world-elite.webp', 'https://www.bmo.com/main/personal/credit-cards/bmo-cashback-world-elite-mastercard/'),
('Rogers World Elite Mastercard',19.99,0.00,7, true, 'rogers-world-elite.png' , 'https://rogersbank.com/en/rogers_worldelite_mastercard_details'),
('AMEX SimplyCash Preferred Card', 20.99, 119.88, 2, true, 'amex-simplycash-preferred.png', 'https://www.americanexpress.com/ca/en/credit-cards/simply-cash-preferred/'),
('Tangerine World Mastercard',19.95,0.00,3, true, 'tangerine-world.png', 'https://www.tangerine.ca/en/products/spending/creditcard/world'),
('Amazon.ca Rewards Mastercard',19.99, 0.00,8, true, 'amazon-rewards.png', 'https://www.amazon.ca/MBNA-Amazon-ca-Rewards-Mastercard/dp/B07MJM4F44'),
('AMEX Air Miles Platinum Card', 20.99, 119.88, 2, true, 'amex-air-miles-platinum.png', 'https://www.americanexpress.com/ca/en/credit-cards/air-miles-platinum-credit-card/'),
('RBC Avion Infinite VISA', 19.99, 119.88, 5, true, 'rbc-avion-infinite.png', 'https://www.rbcroyalbank.com/credit-cards/travel/rbc-avion-visa-infinite.html'),
('AMEX Green Card', 20.99, 0.00, 2, true, 'amex-green.png', 'https://www.americanexpress.com/ca/en/credit-cards/green-card/');

INSERT INTO cards (name, interest_rate, annual_fee, bank_id, featured, img_url, link)
VALUES
('Triangle Mastercard',19.99,0.00,12,false,'Triangle_Mastercard_Mobile.avif','https://www.ctfs.com/content/ctfs/en/credit_cards.html'),
('AMEX Platinum Card', 20.99,699.00, 2,false, 'amex-platinum.webp', 'https://www.americanexpress.com/ca/en/charge-cards/the-platinum-card/'  ),
('TD Cash Back Visa Card', 19.99,0.00, 10, false,'td-cash-back-entry.jpeg', 'https://www.td.com/ca/en/personal-banking/products/credit-cards/cash-back/cash-back-visa-card' ),
('TD Infinite Cash Back Visa Card', 20.99,139.00, 10, false,'td-cash-back-infinite-visa.jpeg', 'https://www.td.com/ca/en/personal-banking/products/credit-cards/cash-back/cash-back-visa-infinite-card' ),
('Walmart Rewards Capital One Card', 20.99,0.00, 1, false,'walmart.png', 'https://www.walmart.com/cp/walmart-credit-card/632402' );





INSERT INTO rewards (reward_rate, card_id,category_id)
VALUES
(1.5,9,1),
(0.5,9,11),
(3,10,5),
(2,10,7),
(1,10,11),
(1,11,2),
(1,11,1),
(1,11,9),
(0.5,11,11),
(1,12,11),
(3,12,1),
(3,12,2),
(3,12,9),
(2,13,5),
(1,13,11);

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
('Disney Plus', 8, true, 'disney-plus.jpeg', '/vendor/disney-plus'),
('Canadian Tire', 6, false,'ct.png','/vendor/canadian-tire' ),
('No Frills', 1, false,'no-frills.jpeg', '/vendor/no-frills' ),
('Burger king', 1, true, 'burger-king.png' ,'/vendor/burger-king'),
('Starbucks', 8, false, 'starbucks.jpeg' ,'/vendor/starbucks'),
('Petro-Canada', 9, true, 'petro-canada.png' ,'/vendor/petro'),
('Shell', 9, false, 'shell.png' ,'/vendor/shell'),
('Esso', 9, false, 'esso.png' ,'/vendor/esso'),
('Walmart', 9, false, 'walmart.jpeg' ,'/vendor/walmart');


INSERT INTO card_user(card_id,user_id)
VALUES
(1,1),
(4,1);

INSERT INTO listings(reward_rate, vendor , card_id)
VALUES
(2.5,2,5),
(1.5,4,2);


INSERT INTO listings(reward_rate, vendor , card_id)
VALUES
( 4,11,9),
( 5 ,18,13);