import express from "express";
import dotenv from "dotenv/config";
const app = express();

app.get("/", (req, res) => {
    res.send({ message: "Zando er en lort"});
});

const PORT = process.env.PORT;
app.listen(PORT, () => console.log("Server is running on port: ", PORT));