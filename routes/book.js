const express = require("express");

const book = express.Router();

book.all("/", (req, res) => res.send("you can do it"));

book.get("/module", (req, res) => {
	console.log(req.route);

	res.render("some");
});
book.get("/hello", (req, res) => {
	res.send("This is router hello");
});
book.get("/hello/:secret", (req, res) => {
	console.dir(req.protocol);
	res.send(`The secret is ${req.topvaluSecret}`);
});

book.param("secret", (req, res, next, value) => {
	if (value == "relentless") {
		req.topvaluSecret = value;
		next();
	}
});

module.exports = book;


res.set({

	"Content-Type" : "application/json || text/html | text/plain",

	"Content-Length" : "123 "
})