import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const passwordHash = await bcrypt.hash(password, 10);

  // Dummy response, in real project save to DB
  res.json({ id: "1", name, email, passwordHash, role: "user" });
};

export const loginUser = (req: Request, res: Response) => {
  const { email, password } = req.body;

  // Dummy token
  const token = jwt.sign({ id: "1", email }, process.env.JWT_SECRET || "secret", { expiresIn: "1h" });

  res.json({ token, user: { id: "1", name: "Demo", email, role: "user" } });
};
