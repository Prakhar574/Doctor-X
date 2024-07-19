import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Patients from './pages/Patients';
import Doctors from './pages/Doctors';
import Appointments from './pages/Appointments';
import ServicesPage from './pages/ServicesPage';
import Contacts from './pages/Contacts';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles.css'; 


const App = () => {
    return (
        <Router>
            <div className="app">
                <Header /> 
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/patients" element={<Patients />} />
                        <Route path="/doctors" element={<Doctors />} />
                        <Route path="/appointments" element={<Appointments />} />
                        <Route path="/services" element={<ServicesPage />} />
                        <Route path="/contacts" element={<Contacts />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
