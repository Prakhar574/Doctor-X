const express = require('express');
const router = express.Router();
const Doctor = require('../models/doctor');


router.get('/', async (req, res) => {
    try {
        const doctors = await Doctor.find();
        res.json(doctors);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


router.post('/', async (req, res) => {
    const doctor = new Doctor({
        name: req.body.name,
        specialization: req.body.specialization, 
        experience: req.body.experience 
    });

    try {
        const newDoctor = await doctor.save();
        res.status(201).json(newDoctor);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
