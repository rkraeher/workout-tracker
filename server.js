const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose")

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//HTML & API ROUTES
app.use(require("./routes/html-routes.js"));
app.use(require("./routes/api-route.js"));

//DB CONNECTION
mongoose.connect("mongodb://localhost:27017/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
}).then(() => console.log("Connected to Mongodb"))
  .catch((err) => console.log(err));

//PORT CONNECTION
app.listen(3000, () => {
  console.log("App running on port 3000!");
});