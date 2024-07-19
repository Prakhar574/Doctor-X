import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Patients.css';

const Patients = () => {
    const [patients, setPatients] = useState([]);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [condition, setCondition] = useState('');
    const [selectedTab, setSelectedTab] = useState('create');

    useEffect(() => {
        fetchPatients();
    }, []);

    const fetchPatients = async () => {
        try {
            const response = await axios.get('https://vercel.com/prakhars-projects-601b6467/backend/api/patients'); 
            setPatients(Array.isArray(response.data) ? response.data : []);
        } catch (error) {
            console.error('Error fetching patients:', error);
            setPatients([]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newPatient = { name, age, gender, condition };
            await axios.post('https://vercel.com/prakhars-projects-601b6467/backend/api/patients', newPatient); 
            fetchPatients();
            setName('');
            setAge('');
            setGender('');
            setCondition('');
        } catch (error) {
            console.error('Error adding patient:', error);
        }
    };

    return (
        <main className="patients-container">
            <h1>Patients</h1>
            <div className="tab-buttons">
                <button onClick={() => setSelectedTab('create')}>Create Patient</button>
                <button onClick={() => setSelectedTab('view')}>View Patients</button>
            </div>
            {selectedTab === 'create' && (
                <form onSubmit={handleSubmit} className="patient-form">
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="number"
                        placeholder="Age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Gender"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Condition"
                        value={condition}
                        onChange={(e) => setCondition(e.target.value)}
                        required
                    />
                    <button type="submit">Add Patient</button>
                </form>
            )}
            {selectedTab === 'view' && (
                <div className="patient-list">
                    <h2>Patient List</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Gender</th>
                                <th>Condition</th>
                            </tr>
                        </thead>
                        <tbody>
                            {patients.map((patient) => (
                                <tr key={patient._id}>
                                    <td>{patient.name}</td>
                                    <td>{patient.age}</td>
                                    <td>{patient.gender}</td>
                                    <td>{patient.condition}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </main>
    );
};

export default Patients;
