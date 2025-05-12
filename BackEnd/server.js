import express from "express";
import env from "dotenv";
import DBConnect from "./database/db.js";

env.config({});

DBConnect();
const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server Listen at PORT ${PORT}`);
});