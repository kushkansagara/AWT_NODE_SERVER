const express = require("express");
const bodyParser = require("body-parser");

const hostname = "127.0.0.1";
const port = 4000;
// New app using express module
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/html/task2.html");
});

app.post("/display", function (req, res) {
  var name = req.body.name;
  var email = req.body.email;
  var Pass = req.body.Pass;
  var date = req.body.date;
  var phone = req.body.phone;
  var gender = req.body.gender;
  var state = req.body.state;
  var range = req.body.range;
  var time = req.body.time;
  var hobbie = req.body.hobbie;

  const response =
    "<b>Student Name is -</b> " +
    name +
    "<br><b>Student email-id is -</b> " +
    email +
    "<br><b>Student Pass is -</b> " +
    Pass +
    "<br><b>Student date is -</b> " +
    date +
    "<br><b>Phone Number is -</b> " +
    phone +
    "<br><b>Gender is -</b> " +
    gender +
    "<br><b>State is -</b> " +
    state +
    "<br><b>range is -</b> " +
    range +
    "<br><b>Time is -</b> " +
    time +
    "<br><b>Hobbies is -</b> " +
    hobbie;
  res.send(response);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
