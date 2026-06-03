const express = require("express");
const app = express();

// ADD ASSIGNMENT API
app.post("/addassignment", (req, res) => {
  res.send("<html><body>Inside Teacher Add Assignment API...</body></html>");
});

// SEARCH STUDENT API
app.get("/searchstudent", (req, res) => {
  res.send("<html><body>Inside Teacher Search Student API...</body></html>");
});

// REMOVE ASSIGNMENT API
app.delete("/removeassignment", (req, res) => {
  res.send("<html><body>Inside Teacher Remove Assignment API...</body></html>");
});

// Start the server, Port 5002
app.listen(5002, () => {
  console.log("EXPRESS Server Started at Port No. 5002");
});
