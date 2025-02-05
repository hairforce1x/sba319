const mongoose = require('mongoose');

const ScoreSchema = new mongoose.Schema({
    playerId: { type: Number, required: true },
    score: { type: Number, required: true }
});

module.exports = mongoose.model('Score', ScoreSchema);