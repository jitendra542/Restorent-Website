
import express from 'express';
import { createReservation, getAllReservations } from '../controllers/reservation.controller.js';

const router = express.Router();

router.post('/', createReservation);      // POST /api/reservations/
router.get('/', getAllReservations);      // GET /api/reservations/

export default router;
