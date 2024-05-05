import express from "express";
import proxy from "express-http-proxy";
import dotenv from "dotenv";

export const app = express();

dotenv.config();
const port = process.env.PORT;

app.get("/", (req, res) => {
    res.send('This is the main route of the app');
});

app.use("/items", proxy("http://localhost:3001/"));

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});
