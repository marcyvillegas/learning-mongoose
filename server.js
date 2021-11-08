
//including the MongoDB Driver
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/testdb";
MongoClient.connect(url, function (error, database) {
    if (error) throw error;
    console.log("Successfully, created Database!");
    database.close();
});