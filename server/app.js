const express = require("express");
const {
  fetch_shipwreck,
  authenticate_user,
  register_user,
  register_shipwreck,
} = require("./db");
const app = express();
var bodyParser = require("body-parser");
var cors = require("cors");

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(bodyParser.urlencoded({ extended: false }));

app.all("/*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.post("/fetch_shipwreck", async (req, res) => {
  let results = await fetch_shipwreck();
  // console.log(results);
  res.send(results);
});

app.post("/login", async (req, res) => {
  authenticate_user(req.body, (results) => {
    res.send(results);
  });
});

app.post("/signup", async (req, res) => {
  let params = {
    name: req.body.first_name + " " + req.body.last_name,
    email_id: req.body.email_id,
    password: req.body.password,
  };
  register_user(params, (results) => {
    res.send(results);
  });
});

app.post("/register_shipwreck", async (req, res) => {
  try {
    // console.log(req.body);
    res.send(await register_shipwreck(req.body));
  } catch (e) {
    return false;
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Running in port:", PORT);
});
