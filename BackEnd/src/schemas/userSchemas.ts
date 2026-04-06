import { z } from "zod";

export const userLoginSchema = z.object({
  user_name: z.string().min(3),
  password: z.string(),
});
