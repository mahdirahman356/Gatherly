import z from "zod";


export const updateUserSchema = z.object({
  fullName: z
    .string().optional(),

  bio: z
    .string()
    .min(5, "Bio must be at least 5 characters")
    .optional(),

  location: z
    .string()
    .min(2, "Location must be at least 2 characters")
    .optional(),

  image: z
    .string()
    .url("Invalid image URL")
    .optional(),

  interests: z
    .array(z.string().min(2, "Interest must be at least 2 characters"))
    .optional(),
});