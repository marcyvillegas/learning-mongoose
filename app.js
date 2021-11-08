
// Import
const express = require('express');
const mongoose = require('mongoose');
const Student = require('./studentModel');

// Express variable
const app = express();

// Connect to port
app.listen(3000, (err) => {
    if (!err) {
        console.log("Connected to port 300")
    } else {
        console.log("Failed to connect to 3000")
    }
});

// Connect to MongoDB in local machine
const conString = "mongodb://localhost:27017/student_try";
mongoose.connect(conString, (err) => {
    if (!err) {
        console.log("database is connected to port 27017");
    } else {
        console.log("failed to connect to port 27017...");
    }
});


/* Define routes - CRUD */
// Root route
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

// Create a record / document
app.get("/students/insert-record", (req, res) => {

    // Create a new object
    let stud = { name: "Ryujin Mine", section: "3ISA", age: 20 , subjects: [{ code: "ICS6209", description: "Kay Sir Santos", unit: 3}]};

    // Insert the object
    Student.insertMany([stud], (err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            res.send("failed to insert new document...")
        }
    });
});

// Read the record
app.get("/students/:id", (req, res) => {

    // Find by id param
    Student.findById(req.params.id, (err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            res.send("cannot read the document...");
        }
    });
})

// Update the document
app.get("/students/update-student/:id", (req, res) => {

    // condition variable
    let condition = { _id: req.params.id };

    // action variable
    let action = { name: "Son Chaeyoung" };

    // updates the document
    Student.update(condition, action, (err, result) => {
        if (!err) {
            res.send(result);
        }
        else {
            res.send("cannot update...");
        }
    });
});

// Delete the document
app.get("/students/delete-student/:id", (req, res) => {

    // condition variable
    let condition = { _id: req.params.id };

    // delete the document
    Student.deleteOne(condition, (err) => {
        if (!err) {
            res.send("deleted the document...");
        } else {
            res.send("failed to delete the document...");
        }
    });
});

/* Creating the relationship */

