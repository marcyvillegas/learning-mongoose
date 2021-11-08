
//including the MongoDB Driver
const MongoClient = require("mongodb").MongoClient;

// Url of the database 
const url = "mongodb://localhost:27017/anotherdb";  // <---- /(name of db) will be the name of the database

// Create database through url
MongoClient.connect(url, function (error, database) {
    if (error) {
        throw error;
    } else {
        console.log("Successfully, created Database!");
    }
    database.close();
});

