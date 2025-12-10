import { Request, Response } from "express";

export const createRoom = (req: Request, res: Response) => {
  res.json({ message: "Room created", room: req.body });
};

export const getRoomAvailability = (req: Request, res: Response) => {
  const { date } = req.query;
  res.json({ roomId: "1", roomName: "Demo Room", availableSlots: [{ start: "10:00", end: "12:00" }] });
};
