const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  chefId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  dateTime: { type: Date, required: true },
  location: { type: String, required: true },
  notes: { type: String },
  status: { type: String, default: 'pending' }
}, { timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema);
