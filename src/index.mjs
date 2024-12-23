/* express learning module */

import express from "express";

import { db } from "./router/db.js";

const app = express();

const Port = process.env.PORT || 3000;

app.use("/db", db);

app.get("/", (req, res) => {
	res.send(`this is the port i am using ${process.env.PORT}`);
});

app.post("/", (req, res) => {
	res.send("You just called the post method at '/hello'! ");
});

app.listen(Port, (req) => {
	console.log(`listening to the port ${Port}`);
});
