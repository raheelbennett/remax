require("dotenv").config()
const { Client } = require('pg')

const db = new Client({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: rocess.env.DB_PASS,
  name: process.env.DB_NAME
})

module.exports  = db;