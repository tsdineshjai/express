/* express learning module */

import express from "express";

const app = express();

const Port = process.env.PORT || 3000;

app.get("/", (req, res) => {
	res.send(`this is the port i am using ${process.env.PORT}`);
});

app.listen(Port, (req) => {
	console.log(process.env.PORT);
	console.log(process.env.NODE_ENV);
	console.log(`listening to the port ${Port}`);
});
