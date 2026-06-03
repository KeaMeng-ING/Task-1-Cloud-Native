const express = require("express");
const app = express();

// LOGIN API
app.post("/studentlogin", (req, res) => {
  res.send("<html><body>Inside Student Login API...</body></html>");
});

// VIEW API
app.get("/viewassignment", (req, res) => {
  res.send("<html><body>Inside Student View Assignment API...</body></html>");
});

// UPDATE API
app.put("/studentupdateprofile", (req, res) => {
  res.send("<html><body>Inside Student Update Profile API...</body></html>");
});

// Start the server, Port 5000
app.listen(5001, () => {
  console.log("EXPRESS Server Started at Port No. 5001");
});
