
// Import
const express = require('express');
const mongoose = require('mongoose');

// Express variable
const app = express();

app.listen(3000, (err) => {
    if (!err) {
        console.log("Connected to port 300")
    } else {
        console.log("Failed to connect to 3000")
    }
});