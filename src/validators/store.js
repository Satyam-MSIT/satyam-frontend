import { z } from "zod";
import { userRoles } from "../constants";

export const storeValidator = z.object({
  name: z.string(),
  token: z.string(),
  email: z.string().email(),
  default_role: z.enum(userRoles),
  current_role: z.enum(userRoles),
  image: z.string().optional(),
});
