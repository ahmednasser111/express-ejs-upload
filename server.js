const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();

app.set("view engine", "ejs");


const upload = multer({ dest: "./uploads" });

app.get("/message", (req, res) => {
  res.render("message", { message: "Hello from Express & EJS!" });
});

app.get("/users", (req, res) => {
  const users = ["Ahmed", "Sara", "Mohamed", "Nour", "Ali"];
  res.render("users", { users });
});

app.get("/", (req, res) => {
  res.render("upload");
});

app.post("/upload", upload.single("profilePic"), (req, res) => {
  res.send(`File uploaded: ${req.file.filename}`);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
