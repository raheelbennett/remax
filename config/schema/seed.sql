INSERT INTO categories (name)
VALUES
('Grocery'),
('Recurring Bill'),
('Furniture'),
('Drug Store'),
('Restaurants'),
('Home Improvement'),
('Hotel'),
('Entertainment'),
('Gas'),
('Transit'),
('Other'),
('USD'),
('Own store');


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

INSERT INTO cards (name, interest_rate, annual_fee, bank_id, img_url)
VALUES
('BMO CashBack World Elite Mastercard',20.99, 120, 9, 'https://www.bmo.com/dist/images/personal/credit-cards/bmo-cashback-world-elite-mastercard.webp'),
('Rogers World Elite Mastercard',19.99,0.00,7,'https://www.greedyrates.ca/wp-content/uploads/2018/05/Rogers-World-Elite-Mastercard-243.png' ),
('AMEX SimplyCash Preferred Card', 20.99, 119.88, 2, 'https://icm.aexp-static.com/Internet/internationalcardshop/en_ca/images/cards/SimplyCash_Preferred_Card.png'),
('Tangerine World Mastercard',19.95,0.00,3 ,'https://princeoftravel.com/wp-content/uploads/2021/03/CONFIDENTIAL_2019-Tangerine_World-MC_ENG_Front_Vertical_Small_RGB.png'),
('Amazon.ca Rewards Mastercard',19.99, 0.00,8 ,'https://m.media-amazon.com/images/G/15/ca_cbcc/EnglishLandingPages/amz_ca-cbcc_english_2x._CB623304959_.png');

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
(2,4,11),
(2.5,5,13),
(2.5,5,12),
(1,5,11);
