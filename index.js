const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dbURI =
  "mongodb+srv://milank32:griffin32@realmcluster.vlwke.mongodb.net/shop-assignment?retryWrites=true&w=majority";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    app.listen(8080, () => {
      console.log("Server is running on port 8080");
    });
  });

const routes = require("./routes/routes");

app.get("/", (req, res) => {
  res.json({ message: "Welcome to shop API" });
});

app.use("/api", routes);
