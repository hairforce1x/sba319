const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    par: { type: Number, required: true }
});

module.exports = mongoose.model('Course', CourseSchema);