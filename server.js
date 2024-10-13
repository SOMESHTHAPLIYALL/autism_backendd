const express = require("express");
const cors = require("cors"); // Importing CORS
const bodyParser = require("body-parser"); // Importing body-parser
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

const app = express();

// Connect to the database
connectDB();

// Use CORS to allow cross-origin requests
app.use(cors());

// Use body-parser to parse JSON requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/user", userRoutes);

// Start the server
app.listen(8080, () => {
  console.log("Server Running on port 8080");
});
