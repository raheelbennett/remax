const db = require("../db.js");

const getBanks = () => {
  return db
    .query("SELECT name FROM banks ORDER BY name;")
    .then((data) => data.rows)
    .catch((err) => err.message);
};
const getCategories = () => {
  return db
    .query("SELECT name FROM categories ORDER BY name;")
    .then((data) => data.rows)
    .catch((err) => err.message);
};
const getFeaturedCategories = () => {
  return db
    .query("SELECT * FROM categories WHERE featured = true;")
    .then((data) => data.rows)
    .catch((err) => err.message);
};
const getCategoriesByCardID = (id) => {
  return db
    .query(
      "SELECT categories.name as category, reward_rate as Cashback, cards.name as cards FROM rewards JOIN categories on category_id=categories.id JOIN cards on card_id=cards.id WHERE card_id = $1;",
      [id]
    )
    .then((data) => data.rows)
    .catch((err) => err.message);
};
const getAllCashback = () => {
  return db
    .query(
      "SELECT categories.name as category, reward_rate as Cashback, cards.name as cards, cards.interest_rate as interest, cards.annual_fee as annual_fee from rewards JOIN categories on category_id=categories.id JOIN cards on card_id=cards.id ORDER BY Cashback DESC;"
    )
    .then((data) => data.rows)
    .catch((err) => err.message);
};

module.exports = {
  getBanks,
  getCategoriesByCardID,
  getAllCashback,
  getCategories,
  getFeaturedCategories,
};
