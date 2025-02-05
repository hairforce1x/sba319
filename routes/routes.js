const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Golfer = require('../models/Golfer');
const Course = require('../models/Course');
const Score = require('../models/Score');
const exampleData = require('../data/data.json');

router.use(express.json());

// Get all golfers
router.get('/golfers', async (req, res) => {
    try {
        const golfers = await Golfer.find();
        res.json(golfers);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;