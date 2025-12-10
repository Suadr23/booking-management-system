import express from "express";
import { createRoom, getRoomAvailability } from "../controllers/roomController.ts";

const router = express.Router();

router.post("/", createRoom);
router.get("/availability", getRoomAvailability);

export default router;
