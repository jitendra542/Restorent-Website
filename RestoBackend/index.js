
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import reservationRoutes from './routes/reservation.route.js';
import cors from 'cors';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/reservations', reservationRoutes);

// Connect to DB and start server
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
  })
  .catch((err) => console.error(" DB connection error:", err));
