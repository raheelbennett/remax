const db = require("../db.js");

const searchBanks = (search) => {
  console.log("The Keyword is ", search);

  return db
    .query(`SELECT * FROM banks WHERE name ILIKE '%${search}%' ORDER BY name`)
    .then((data) => data.rows)
    .catch((err) => err.message);
};

const searchCards = (search) => {
  return db
    .query(`SELECT * FROM cards WHERE name ILIKE '%${search}%' ORDER BY name`)
    .then((data) => data.rows)
    .catch((err) => err.message);
};

const searchVendors = (search) => {
  return db
    .query(`SELECT * FROM vendors WHERE name ILIKE '%${search}%' ORDER BY name`)
    .then((data) => data.rows)
    .catch((err) => err.message);
};

module.exports = { searchBanks, searchCards, searchVendors };
