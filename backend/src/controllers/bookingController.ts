import { Request, Response } from "express";

export const createBooking = (req: Request, res: Response) => {
  res.json({ message: "Booking created", booking: req.body });
};

export const getMyBookings = (req: Request, res: Response) => {
  res.json([{ id: "1", roomId: "1", startTime: new Date(), endTime: new Date(), status: "active" }]);
};

export const rescheduleBooking = (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({ message: `Booking ${id} rescheduled`, newTimes: req.body });
};
