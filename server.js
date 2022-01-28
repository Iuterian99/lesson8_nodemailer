const express = require("express");
const app = express();
const mailing = require("./lib/mail");
const ejs = require("ejs");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/", (req, res) => {
  const { name, email } = req.body;

  const messageSent = mailing(email, name);

  if (messageSent) {
    res.send("OK");
  }
});

app.listen(9000, console.log(9000));
