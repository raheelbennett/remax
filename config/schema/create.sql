DROP TABLE IF EXISTS banks CASCADE;
DROP TABLE IF EXISTS cards CASCADE;
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS card_user CASCADE;
DROP TABLE IF EXISTS categories CASCADE;
DROP TABLE IF EXISTS vendors CASCADE;
DROP TABLE IF EXISTS rewards CASCADE;
DROP TABLE IF EXISTS listings CASCADE;

CREATE TABLE banks (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE cards (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  interest_rate FLOAT,
  annual_fee FLOAT,
  img_url text,
  bank_id INTEGER REFERENCES banks(id) ON DELETE CASCADE
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE card_user (
  id SERIAL PRIMARY KEY NOT NULL,
  card_id INTEGER REFERENCES cards(id) ON DELETE CASCADE,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE categories (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE rewards (
  id SERIAL PRIMARY KEY NOT NULL,
  reward_rate FLOAT NOT NULL,
  card_id INTEGER REFERENCES cards(id) ON DELETE CASCADE,
  category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE
);

CREATE TABLE vendors (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE
);

CREATE TABLE listings (
  id SERIAL PRIMARY KEY NOT NULL,
  reward_rate FLOAT NOT NULL,
  vendor INTEGER REFERENCES vendors(id) ON DELETE CASCADE,
  card_id INTEGER REFERENCES cards(id) ON DELETE CASCADE
);
