require("dotenv").config();
const { Client } = require("pg");
const fs = require("fs");

// const db = new Client({
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   name: process.env.DB_NAME,
// });

// const db = new Client({
//   host: "localhost",
//   port: 5432,
//   user: "labber",
//   password: "labber",
//   name: "remax",
// });

// db.connect().catch((e) => console.log(`Error connecting to Postgres server:\n${e}`));

// const create = fs.readFileSync("schema/create.sql", { encoding: "utf8" });
// const seed = fs.readFileSync("./schema/seed.sql", { encoding: "utf8" });

// db.query(create)
//   .then(() => console.log("DB Reloaded"))
//   .then(() => db.end())
//   .catch((e) => {
//     console.log(e.message);
//     db.end();
//   });

module.exports = db;
