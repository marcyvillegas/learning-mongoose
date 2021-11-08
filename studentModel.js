
// Import
const mongoose = require('mongoose');

// Create Schema varaible
const Schema = mongoose. Schema;

// Student Schema
const StudentSchema = new Schema ({
    name: String,
    section: String,
    age: Number
});

// Create Student Schema variable
const Student = mongoose.model('student', StudentSchema);

// Export
module.exports = Student;