import { z } from "zod";

const userSchema = z.object({
  username: z.string().min(3, "Username is required"),
  emailz: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  avatar: z.string().url("Invalid URL").optional(),
});

const userIdSchema = z.object({
  userId: z.number().int().positive("User ID must be a positive integer"),
});

export { userIdSchema, userSchema };
