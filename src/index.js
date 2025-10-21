import express from "express";
import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect(err => {
  if (err) {
    console.error("Database connection failed:", err.message);
  } else {
    console.log("Connected to MySQL database");
  }
});

app.get("/", (req, res) => {
  db.query("SELECT 'Database Connected!' AS message", (err, result) => {
    if (err) return res.status(500).send(err.message);
    res.send(`Express is running — ${result[0].message}`);
  });
});

app.listen(3000, () => console.log("🚀 Server running on port 3000"));
