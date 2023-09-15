// import the express library
const express = require("express");
// create new express Application 
const app = express();
const PORT = 3000;
// Define a route for Express Page
app.get("/", (req, res) => {
    res.send("Hello from Express!!!");
});
// Define a route for Express Page
app.get("/home", (req, res) => {
    res.send("Hello from HomePage!!!");
});
app.listen(PORT, () => {
    console.log(`Server is Running on http://localhost:${PORT}`);
});