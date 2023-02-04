const fs = require("fs");
const db = require("./db.js");

const create = fs.readFileSync("config/schema/create.sql", { encoding: "utf8" });
const seed = fs.readFileSync("config/schema/seed.sql", { encoding: "utf8" });

db.query(create)
  .then(() => db.query(seed))
  .then(() => console.log("DB Reloaded"))
  .catch((e) => console.log(e.message))
  .finally(() => db.end());
