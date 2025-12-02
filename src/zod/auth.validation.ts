import z from "zod";


export const registerValidationZodSchema = z.object({
  fullName: z
    .string({ error: "Name is required!" })
    .min(2, "Name must be at least 2 characters"),

  email: z
    .string({ error: "Email is required!" })
    .email("Invalid email address"),

  password: z
    .string({ error: "Password is required!" })
    .min(6, "Password must be at least 6 characters"),

  location: z
    .string({ error: "Location is required!" })
    .min(2, "Location must be at least 2 characters"),
});

export const loginValidationZodSchema = z.object({
  email: z
    .string({ error: "Email is required!" })
    .email("Invalid email address"),

  password: z
    .string({ error: "Password is required!" })
    .min(6, "Password must be at least 6 characters"),
});

