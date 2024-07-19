import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Doctors.css';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    const [name, setName] = useState('');
    const [specialization, setSpecialization] = useState('');
    const [experience, setExperience] = useState('');
    const [selectedTab, setSelectedTab] = useState('create');

    useEffect(() => {
        fetchDoctors();
    }, []);

    const fetchDoctors = async () => {
        try {
            const response = await axios.get('http://localhost:4001/api/doctors');
            setDoctors(Array.isArray(response.data) ? response.data : []);
        } catch (error) {
            console.error('Error fetching doctors:', error);
            setDoctors([]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newDoctor = { name, specialization, experience };
            await axios.post('http://localhost:4001/api/doctors', newDoctor);
            fetchDoctors();
            setName('');
            setSpecialization('');
            setExperience('');
        } catch (error) {
            console.error('Error adding doctor:', error);
        }
    };

    return (
        <main className="doctors-container">
            <h1>Doctors</h1>
            <div className="tab-buttons">
                <button className={selectedTab === 'create' ? 'active' : ''} onClick={() => setSelectedTab('create')}>
                    Create Doctor
                </button>
                <button className={selectedTab === 'view' ? 'active' : ''} onClick={() => setSelectedTab('view')}>
                    View Doctors
                </button>
            </div>
            {selectedTab === 'create' && (
                <form onSubmit={handleSubmit} className="doctor-form">
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Specialization"
                        value={specialization}
                        onChange={(e) => setSpecialization(e.target.value)}
                        required
                    />
                    <input
                        type="number"
                        placeholder="Experience (years)"
                        value={experience}
                        onChange={(e) => setExperience(e.target.value)}
                        required
                    />
                    <button type="submit">Add Doctor</button>
                </form>
            )}
            {selectedTab === 'view' && (
                <div className="doctor-list">
                    <h2>Doctor List</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Specialization</th>
                                <th>Experience</th>
                            </tr>
                        </thead>
                        <tbody>
                            {doctors.map((doctor) => (
                                <tr key={doctor._id}>
                                    <td>{doctor.name}</td>
                                    <td>{doctor.specialization}</td>
                                    <td>{doctor.experience}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </main>
    );
};

export default Doctors;
