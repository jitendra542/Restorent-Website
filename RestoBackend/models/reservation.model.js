
import mongoose from 'mongoose';

const reservationSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: String,
  phone: { type: String, required: true },
  email: { type: String, required: true },
  state: String,
  guestNumber: Number,
  date: { type: String, required: true },
  subject: String
}, { timestamps: true });

const Reservation = mongoose.model('Reservation', reservationSchema);
export default Reservation;
