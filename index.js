/* express learning module */

const book = require("./routes/book");
const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));
// server.get("/", (req, res) => res.send("https secure"));
app.set("view engine", "ejs");
app.use("/books", book);

// app.set("views", __dirname + "/views");
app.get("/content", (req, res) => {
	res.render("index", { tries: "successEveryTime" });
});

app.get("/", (req, res) => {
	res.send(`this is the base URL :: ${req.baseUrl} + "\\"`);
});

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

/* good case to pass on the param as a property to the request object.  */
app.get("/contact/:name", (req, res) => {
	console.log(req.baseUrl);
	res.send(`contacted the person : ${req.myName} `);
});

app.param("name", (req, res, next, nameId) => {
	if (nameId == "tsri") {
		req.myName = "D Tanishka Sri";
		next();
	}
});
