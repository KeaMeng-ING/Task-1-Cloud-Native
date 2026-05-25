const express = require("express");
const app = express();

// 1. REGISTRATION - POST
app.post("/register", (req, res) => {
  res.send("Register Service");
});

// 2. LOGIN - POST
app.post("/login", (req, res) => {
  res.send("Login Service");
});

// 3. SEARCH - GET
app.get("/search", (req, res) => {
  res.send("Search Service");
});

// 4. PROFILE UPDATE - PUT
app.put("/update", (req, res) => {
  res.send("Profile Update Service");
});

// 5. DELETE USER - DELETE
app.delete("/delete", (req, res) => {
  res.send("Delete User Service");
});

app.listen(3000, () => console.log("Server running on port 3000"));
