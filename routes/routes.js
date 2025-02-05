const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Golfer = require('../models/Golfer');
const Course = require('../models/Course');
const Score = require('../models/Score');
const data = require('../data/data.json');

router.use(express.json());

router.get('/golfers', async (req, res) => {
    try {
        res.json(data.golfers)
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post('/golfers', async (req, res) => {
    try {
        const { name } = req.body;
        const newGolfer = new Golfer({
            name
        });
        await newGolfer.save();
        res.status(201).json(newGolfer);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put('/golfers/:id', async (req, res) => {
    try {
        const golferId = req.params.id;
        const { name } = req.body;
        const updatedGolfer = await Golfer.findByIdAndUpdate(
            golferId,
            { name },
            { new: true }
        );
        if (!updatedGolfer) {
            return res.status(404).json({ error: "Golfer not found" });
        }
        res.json(updatedGolfer);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete('/golfers/:id', async (req, res) => {
    try {
        const golferId = req.params.id;
        const deletedGolfer = await Golfer.findByIdAndDelete(golferId);
        if (!deletedGolfer) {
            return res.status(404).json({ error: "Golfer not found" });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/courses', async (req, res) => {
    try {
        res.json(data.courses)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

router.get('/scores', async (req, res) => {
    try {
        res.json(data.scores)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

module.exports = router;