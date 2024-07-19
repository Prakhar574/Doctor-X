const express = require('express');
const router = express.Router();
const Appointment = require('../models/appointment');


router.get('/', async (req, res) => {
    try {
        const appointments = await Appointment.find().populate('patientId').populate('doctorId');
        res.json(appointments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


router.post('/', async (req, res) => {
    const appointment = new Appointment({
        patientId: req.body.patientId,
        doctorId: req.body.doctorId,
        date: req.body.date,
        reason: req.body.reason
    });

    try {
        const newAppointment = await appointment.save();
        res.status(201).json(newAppointment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
