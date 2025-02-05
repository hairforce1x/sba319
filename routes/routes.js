const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Golfer = require('../models/Golfer');
const Course = require('../models/Course');
const Score = require('../models/Score');
const data = require('../data/data.json');

router.use(express.json());

// Get all golfers
router.get('/golfers', async (req, res) => {
    try {
       res.json(data.golfers)
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/courses', async(req, res) => {
    try{
        res.json(data.courses)
    } catch (err) {
        res.status (500).json ({ error: err.message })
    }
})

router.get('/scores', async(req, res) => {
    try{
        res.json(data.scores)
    } catch (err) {
        res.status (500).json ({ error: err.message })
    }
})

module.exports = router;