import express from "express";
import dotenv from "dotenv";
import { ApolloServer } from "apollo-server-express";
import Path from "path";

import { typeDefs, resolvers } from "./schemas";
import { authMiddleware } from "./utils/auth.js";
import connectDB from "./config/connection.js";

dotenv.config();
connectDB();

const app = express();

app.get("/", (req, res) => {
	res.send("API is running");
});

const server = new ApolloServer({
	typeDefs,
	resolvers,
	context: authMiddleware,
});

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve up static assets
app.use("/images", express.static(Path.join(__dirname, "../client/images")));

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`API server running on port ${PORT}!`);
	console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
});
