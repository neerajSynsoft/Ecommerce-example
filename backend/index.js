import express from "express";
import productRoutes from "./src/routes/productRoutes.js";
import categoryRoutes from "./src/routes/categoryRoutes.js";
import userRoutes from "./src/routes/userRoutes.js";
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

// Use product routes
app.use("/api", productRoutes);

// Use category routes
app.use("/api", categoryRoutes);

// Use user routes
app.use("/api", userRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
