const db = require('../db.js');

const getBanks = () => {
  return db.query('SELECT name FROM banks ORDER BY name;')
    .then(data => data.rows)
    .catch(err => err.message);
};
const getCategoriesByCardID = (id) => {
  return db.query('SELECT categories.name as category, reward_rate as Cashback, cards.name as cards from rewards JOIN categories on category_id=categories.id JOIN cards on card_id=cards.id WHERE card_id = $1;',[id] )
    .then(data => data.rows)
    .catch(err => err.message);
};
const getAllCategories = () => {
  return db.query('SELECT categories.name as category, reward_rate as Cashback, cards.name as cards from rewards JOIN categories on category_id=categories.id JOIN cards on card_id=cards.id ORDER BY Cashback DESC')
    .then(data => data.rows)
    .catch(err => err.message);
};




module.exports = { getBanks, getCategoriesByCardID , getAllCategories};