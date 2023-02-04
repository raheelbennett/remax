const db = require("@/config/db");
export default function handler(req, res) {
  const query = "SELECT * FROM cards";
  return db
    .query(query)
    .then((result) => {
      return res.json(result.rows);
    })
    .catch((error) => {
      return res.json(error);
    });

  
}
