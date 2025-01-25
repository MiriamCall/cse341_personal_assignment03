const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const connectToDatabase = require("./db/db_connect");

const app = express();
const port = process.env.PORT || 8080;
const host = process.env.HOST || "localhost";

app.use(express.json());

connectToDatabase(process.env.DB_NAME);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
