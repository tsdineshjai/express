/* express learning module */

const book = require("./routes/book");
const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.use("/books", book);

// app.set("views", __dirname + "/views");

app.get("/content", (req, res) => {
	res.render("index", { tries: "successEveryTime" });
});

const callbackOne = (req, res, next) => {
	res.send("hello");
	console.log(`this is callback functtion one`);
	next();
};
const callbackTwo = (req, res, next) => {
	console.log(`this is callback functtion two`);
	next();
};

app.get("/", callbackOne, callbackTwo);

app.get("/ab?cd", (req, res) => {
	res.send("ab?cd");
});
app.listen(3333, () => {
	console.log(`i am currently listening to the port 3333`);
});

app.get("/ab*cd", (req, res) => {
	res.send("ab*cd");
});

app.get("/ab(de)?e", (req, res) => {
	res.send("optional paramter.");
});

app.get("/path/:userId/:name.:plant", (req, res) => {
	res.send(req.params);
});

app.get("/contact/:name", (req, res) => {
	res.send(`contacted the person : ${req.params.name} `);
});

app.param("name", (req, res, next, nameId) => {
	if (nameId == "tsri") {
		req.myName = nameId;
		next();
	}
});
