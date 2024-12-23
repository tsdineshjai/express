import express from "express";

export const db = express.Router();

db.get("/read/:id([0-9]{5})", (req, res) => {
	console.log("read route");
	res.send("this is mini router route" + " " + req.params.id);
});
db.post("/read", (req, res) => {
	console.log("posting to this route");
});
