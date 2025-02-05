const mongoose = require('mongoose');

const GolferSchema = new mongoose.Schema({
    name: { type: String, required: true }
});

module.exports = mongoose.model('Golfer', GolferSchema);