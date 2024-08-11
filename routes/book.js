const express = require("express");

const book = express.Router();

book.get("/module", (req, res) => {
	res.send("This is router module");
});
book.get("/hello", (req, res) => {
	res.send("This is router hello");
});

module.exports = book;
