require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
var cors = require("cors");
const dbURL =
  process.env.NODE_ENV == "development"
    ? process.env.MONGODB_URL
    : process.env.DB_URL;
const PORT = process.env.PORT;

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose
  .connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  });

const routes = require("./routes/routes");

app.get("/", (req, res) => {
  res.json({ message: "Welcome to shop API" });
});

app.use("/api", routes);

app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    err: {
      status: err.status || 500,
      message: err.message,
    },
  });
});
