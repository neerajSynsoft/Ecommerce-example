import express from "express";
import Routes from "./src/routes/index.js";
import { connectToDatabase } from "./src/dbConnection/db.js";
import 'dotenv/config'

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

const port = process.env.APP_PORT || 8080;
connectToDatabase();

// Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.send("Hello World! this is Two Factor Authentication Example");
});

app.use("/", Routes)

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
