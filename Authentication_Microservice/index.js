const express = require("express");
const app = express();

const jwt = require("jsonwebtoken");
require("dotenv").config({ path: __dirname + "/.env" });

app.use(express.json());

const JWT_SECRETE = process.env.JWT_SECRETE;

const PersonModel = require("./person_schema.js");
const dbconnect = require("./dbconnect.js");

/*
In the postman use the following URL
localhost:5002/login

{
  "email":"a@gmail.com",
  "password":"abc",
  "role":"student"
}

*/

// LOGIN API
app.post(
  "/login",
  (req, res) => {
    PersonModel.find({
      emailid: req.body.email,
      pass: req.body.password,
      role: req.body.role,
    }).then((getsearchdocument) => {
      if (getsearchdocument.length > 0) {
        const token = jwt.sign(
          { email: req.body.email, role: req.body.role },
          JWT_SECRETE,
          { expiresIn: "24h" },
        );
        return res.json({ token });
      } else {
        res.status(400).send("Invalid user");
      }
    }); //CLOSE THEN
  }, //CLOSE CALLBACK FUNCTION BODY
); //CLOSE Post METHOD

app.listen(5003, () => {
  console.log("Authentication Service Server is running on PORT NO: 5003");
});
