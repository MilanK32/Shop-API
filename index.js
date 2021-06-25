require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dbURL = process.env.DB_URL;
const PORT = process.env.PORT;

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
