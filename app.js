import express from "express";
import dotenv from "dotenv/config";
const app = express();

app.use(express.json());

import db from "./database/connection.js";
db;



app.get("/", (req, res) => {
    res.send({ message: "Loui er en søøød"});
});

const PORT = process.env.PORT;
app.listen(PORT, () => console.log("Server is running on port: ", PORT));