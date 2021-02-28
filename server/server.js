import express from "express";
import dotenv from "dotenv";
import path from "path";
import colors from "colors";

import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const app = express();

app.get("/", (req, res) => {
	res.send("API is running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`API server running on port ${PORT}!`.yellow.bold);
});
