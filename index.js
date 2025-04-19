require('dotenv').config();
const express = require('express');
const mongoose = require('./config/db');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const bookingsRouter = require('./routes/bookings');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api/auth', authRoutes);
app.use('/api/bookings', bookingsRouter);
const PORT = process.env.PORT || 800;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));