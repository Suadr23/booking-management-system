import express from "express";
import { createBooking, getMyBookings, rescheduleBooking } from "../controllers/bookingController.ts";

const router = express.Router();

router.post("/", createBooking);
router.get("/me", getMyBookings);
router.patch("/:id/reschedule", rescheduleBooking);

export default router;

