import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken";
import type { AuthPayload } from "../types/express";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ error: "Missing or invalid authorization header" });
  }

  const token = authHeader.slice("Bearer ".length).trim();
  const jwtSecret = process.env.JWT_SECRET;

  if (!jwtSecret) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "JWT_SECRET is not configured" });
  }

  try {
    const decoded = jwt.verify(token, jwtSecret);

    if (
      typeof decoded === "string" ||
      !decoded.user_id ||
      typeof decoded.user_id !== "string"
    ) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ error: "Invalid token payload" });
    }

    req.user = decoded as AuthPayload;
    return next();
  } catch {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ error: "Invalid or expired token" });
  }
};
