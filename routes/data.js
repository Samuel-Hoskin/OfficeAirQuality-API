const express = require('express');
const router = express.Router();
const Data = require('../models/data');

//add new data
router.post('/add', async (req, res) => {
    const data = new Data({
        name: req.body.name,
        temperature: req.body.temperature,
        pressure: req.body.pressure,
        humidity: req.body.humidity,
        light: req.body.light,
        reducing: req.body.reducing,
        oxidising: req.body.oxidising,
        nh3: req.body.nh3,
        PM1: req.body.PM1,
        PM25: req.body.PM25,
        PM10: req.body.PM10,
      

    });
    try {
        const savedData = await data.save();
        res.json(savedData);
    } catch (err) {
        res.json({ message: err });
    }
});