
// Import
const server = require("./server");
const express = require("express");
const report = require("jsreport");
const data = require("./data")

// Create app variable
const app = express();

// Connect to port
app.listen(3000, () => {
    console.log("app is listening to port 5000...");
});

/* Defning routes */
// Main route
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/report.html");
});

//Accessing the template
app.get("/report", (req, res) => {

    // renders the template
    report.render({
        template: { name: "template_try"},
        data: data
    }).then(out => {
        out.stream.pipe(res);
    }).catch(err => {
        res.send("Error: " + err);
    });
});