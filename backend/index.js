import express from "express";
import Routes from "./src/routes";
import { connectToDatabase } from "./src/dbConnection/db.js";

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

const port = process.env.PORT || 8080;
connectToDatabase();

// Middleware to parse JSON
app.use(express.json());

app.get("/", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.send("Hello World!");
});

app.use("/", Routes)



app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
