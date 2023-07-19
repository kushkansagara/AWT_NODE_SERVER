const express = require("express");
const bodyParser = require("body-parser");

const hostname = "127.0.0.1";
const port = 3000;
// New app using express module
const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/html/task1.html");
});

app.post("/display", function (req, res) {
  var fname = req.body.fname;
  var lname = req.body.lname;
  var ID = req.body.id;
  var age = req.body.age;
  var dep = req.body.dep;
  var branch = req.body.branch;

  var FullName = fname + " " + lname;

  const response =
    "<b>Student Full Name is -</b> " +
    FullName +
    "<br><b>Student ID is -</b> " +
    ID +
    "<br><b>Student Age is -</b> " +
    age +
    "<br><b>Department is -</b> " +
    dep +
    "<br><b>Branch is -</b> " +
    branch;

  res.send(response);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
