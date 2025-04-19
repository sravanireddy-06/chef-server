const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

// POST /api/bookings - Create a booking
router.post('/book', async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json(booking);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET /api/bookings/user/:userId - Get user's bookings
router.get('/user/:userId', async (req, res) => {
  try {
    const bookings = await Booking.find({ userId: req.params.userId }).populate('chefId');
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/bookings/chef/:chefId - Get bookings for a chef
router.get('/chef/:chefId', async (req, res) => {
  try {
    const bookings = await Booking.find({ chefId: req.params.chefId }).populate('userId');
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
