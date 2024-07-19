const express = require('express');
const router = express.Router();
const Patient = require('../models/patient');


router.get('/', async (req, res) => {
    try {
        const patients = await Patient.find();
        res.json(patients);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


router.post('/', async (req, res) => {
    const patient = new Patient({
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender,
        condition: req.body.condition,
    });

    try {
        const newPatient = await patient.save();
        res.status(201).json(newPatient);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
