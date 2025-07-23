
import Reservation from '../models/reservation.model.js';

export const createReservation = async (req, res) => {
  try {
    const { firstName, lastName, phone, email, state, guestNumber, date, subject } = req.body;

    if (!firstName || !phone || !email || !date) {
      return res.status(400).json({ message: "Required fields missing" });
    }

    const existing = await Reservation.findOne({ email, date });
    if (existing) {
      return res.status(409).json({ message: "You already have a reservation on this date" });
    }

    const newReservation = new Reservation({ firstName, lastName, phone, email, state, guestNumber, date, subject });
    await newReservation.save();

    res.status(201).json({ message: "🎉 Reservation created", data: newReservation });
  } catch (err) {
    console.error("❌ Reservation error:", err.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getAllReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find().sort({ createdAt: -1 });
    res.status(200).json(reservations);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch reservations" });
  }
};
