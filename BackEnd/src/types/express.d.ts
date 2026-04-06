import type { JwtPayload } from "jsonwebtoken";

export type AuthPayload = JwtPayload & {
  user_id: string;
  user_name: string;
  first_name: string;
  last_name: string;
};

declare global {
  namespace Express {
    interface Request {
      user?: AuthPayload;
    }
  }
}

export {};
