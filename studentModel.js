
// Import
const mongoose = require('mongoose');

// Create Schema varaible
const Schema = mongoose.Schema;

/* Creating the relationship */

// Subject Schema
const SubjectSchema = new Schema({
    code: String,
    description: String,
    units: Number
}, { versionkey: false });

// Student Schema
const StudentSchema = new Schema({
    name: String,
    section: String,
    age: Number,
    subjects: [SubjectSchema]
}, {
    versionKey: false
});

// Create Student Schema variable
const Student = mongoose.model('student', StudentSchema);

// Export
module.exports = Student;