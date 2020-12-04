const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose")

const app = express();
const PORT = process.env.PORT || 3000;

app.use(logger("dev"));

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//HTML & API ROUTES
app.use(require("./routes/html-routes.js"));
app.use(require("./routes/api-routes.js"));

//DB CONNECTION
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}).then(() => console.log("Connected to Mongodb"))
  .catch((err) => console.log(err));

//PORT CONNECTION
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});