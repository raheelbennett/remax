const db = require("@/config/db");
export default function handler(req, res) {
  const query = "SELECT * FROM vendors";
  return db
    .query(query)
    .then((result) => {
      return res.json(result.rows);
    })
    .catch((error) => {
      return res.json(error);
    });

  
}
