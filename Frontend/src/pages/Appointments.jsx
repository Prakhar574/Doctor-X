import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Appointments.css';
import BACKEND_URL from '@/config';

const Appointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [patients, setPatients] = useState([]);
    const [doctors, setDoctors] = useState([]);
    const [patientId, setPatientId] = useState('');
    const [doctorId, setDoctorId] = useState('');
    const [date, setDate] = useState('');
    const [reason, setReason] = useState('');
    const [selectedTab, setSelectedTab] = useState('create');

    useEffect(() => {
        fetchAppointments();
        fetchPatients();
        fetchDoctors();
    }, []);

    const fetchAppointments = async () => {
        try {
            const response = await axios.get(`${BACKEND_URL}/api/appointments`);
            setAppointments(Array.isArray(response.data) ? response.data : []);
        } catch (error) {
            console.error('Error fetching appointments:', error.response ? error.response.data : error.message);
            setAppointments([]);
        }
    };

    const fetchPatients = async () => {
        try {
            const response = await axios.get(`${BACKEND_URL}/api/patients`);
            setPatients(response.data);
        } catch (error) {
            console.error('Error fetching patients:', error.response ? error.response.data : error.message);
        }
    };

    const fetchDoctors = async () => {
        try {
            const response = await axios.get(`${BACKEND_URL}/api/doctors`);
            setDoctors(response.data);
        } catch (error) {
            console.error('Error fetching doctors:', error.response ? error.response.data : error.message);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newAppointment = { patientId, doctorId, date, reason };
            await axios.post(`${BACKEND_URL}/api/appointments`, newAppointment);
            fetchAppointments();
            setPatientId('');
            setDoctorId('');
            setDate('');
            setReason('');
        } catch (error) {
            console.error('Error adding appointment:', error.response ? error.response.data : error.message);
        }
    };

    const handlePrint = (appointment) => {
        if (!appointment || !appointment.patientId || !appointment.doctorId) {
            console.error('Invalid appointment data:', appointment);
            return;
        }

        const patientName = appointment.patientId.name || 'Unknown Patient';
        const doctorName = appointment.doctorId.name || 'Unknown Doctor';
        const appointmentDate = new Date(appointment.date).toLocaleDateString() || 'Unknown Date';
        const reason = appointment.reason || 'No Reason Provided';

        const printContents = `
            <html>
                <head>
                    <title>Appointment Details</title>
                    <style>
                        body { font-family: Arial, sans-serif; margin: 20px; }
                        h1 { text-align: center; }
                        p { font-size: 14px; }
                        .details { margin-top: 20px; }
                    </style>
                </head>
                <body>
                    <h1>Appointment Details</h1>
                    <div class="details">
                        <p><strong>Patient Name:</strong> ${patientName}</p>
                        <p><strong>Doctor Name:</strong> ${doctorName}</p>
                        <p><strong>Date:</strong> ${appointmentDate}</p>
                        <p><strong>Reason:</strong> ${reason}</p>
                    </div>
                </body>
            </html>
        `;
        
        const newWindow = window.open('', '', 'width=600,height=400');
        if (!newWindow) {
            console.error('Failed to open new window');
            return;
        }
        console.log('New window opened');

        newWindow.document.open();
        newWindow.document.write(printContents);
        newWindow.document.close();
        console.log('Content written to new window');

        newWindow.print();
        console.log('Print dialog initiated');
        newWindow.close();
    };

    return (
        <main className="appointments-container">
            <h1>Appointments</h1>
            <div className="tab-buttons">
                <button className={selectedTab === 'create' ? 'active' : ''} onClick={() => setSelectedTab('create')}>
                    Create Appointment
                </button>
                <button className={selectedTab === 'view' ? 'active' : ''} onClick={() => setSelectedTab('view')}>
                    View Appointments
                </button>
            </div>
            {selectedTab === 'create' && (
                <form onSubmit={handleSubmit} className="appointment-form">
                    <select
                        value={patientId}
                        onChange={(e) => setPatientId(e.target.value)}
                        required
                    >
                        <option value="">Select Patient</option>
                        {patients.map((patient) => (
                            <option key={patient._id} value={patient._id}>{patient.name}</option>
                        ))}
                    </select>
                    <select
                        value={doctorId}
                        onChange={(e) => setDoctorId(e.target.value)}
                        required
                    >
                        <option value="">Select Doctor</option>
                        {doctors.map((doctor) => (
                            <option key={doctor._id} value={doctor._id}>{doctor.name}</option>
                        ))}
                    </select>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Reason"
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                        required
                    />
                    <button type="submit">Add Appointment</button>
                </form>
            )}
            {selectedTab === 'view' && (
                <div className="appointment-list">
                    <h2>Appointment List</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Patient Name</th>
                                <th>Doctor Name</th>
                                <th>Date</th>
                                <th>Reason</th>
                                <th>Print</th>
                            </tr>
                        </thead>
                        <tbody>
                            {appointments.map((appointment) => (
                                <tr key={appointment._id}>
                                    <td>{appointment.patientId.name}</td>
                                    <td>{appointment.doctorId.name}</td>
                                    <td>{new Date(appointment.date).toLocaleDateString()}</td>
                                    <td>{appointment.reason}</td>
                                    <td><button onClick={() => handlePrint(appointment)}>Print</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </main>
    );
};

export default Appointments;
