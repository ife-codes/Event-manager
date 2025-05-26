// initialization
const express = require("express");
const app = express();

// module imports
require("dotenv").config();
const morgan = require("morgan");
const cors = require("cors")

// local imports
const authRoutes = require("./routes/authRoutes");

// local variables
const port = process.env.PORT

// middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(cors())

// starting the server
app.listen(port, () => {
  console.log("Server is now running!");
  console.log("Hope you get no bugs!");
});

// request
app.use("/auth", authRoutes);

app.use((req, res) => {
  res.status(404).json({ msg: "Request not found, please check the method or endpoint" });
});
