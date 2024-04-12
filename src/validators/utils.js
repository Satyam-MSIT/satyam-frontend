import { z } from "zod";

export const emailValidator = z
  .string({ required_error: "Email is required" })
  .trim()
  .toLowerCase()
  .email("Provide valid email");

export const nameValidator = z
  .string({
    required_error: "Name is required",
  })
  .trim()
  .min(1, "Name is required");

export const passwordValidator = z
  .string({ required_error: "Password is required" })
  .min(8, "Password must be atleast 8 char long");
