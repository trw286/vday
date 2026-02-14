// import
const express = require("express");
const path = require("path");

// variables
const app = express();
const PORT = process.env.PORT || 3000;

// views
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// middleware
app.use(express.static(path.join(__dirname, "public")));

// render homepage
app.get("/", (req, res) => {
	res.render("index");
});

// render highlights page 
app.get("/highlights", (req, res) => {
	res.render("highlights");
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
