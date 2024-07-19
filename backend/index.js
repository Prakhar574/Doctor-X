const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const patientsRouter = require('./routes/patients');
const doctorsRouter = require('./routes/doctors');
const appointmentsRouter = require('./routes/appointments');

const app = express();
const port = process.env.PORT || 4001;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://pkatiyar574:Ramji1234@cluster0.kynig5p.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.get('/', (req, res) => {
    res.send('Welcome to the API!'); 
});

app.use('/api/patients', patientsRouter);
app.use('/api/doctors', doctorsRouter);
app.use('/api/appointments', appointmentsRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
