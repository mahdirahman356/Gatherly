import { z } from "zod";

export const eventStatusEnum = z.enum(["OPEN", "CLOSED", "CANCELLED"]);

export const createEventSchema = z.object({
    title: z
        .string({ error: "Title is required!" })
        .min(1, { message: "Title is required!" }),

    type: z
        .string({ error: "Type is required!" })
        .min(1, { message: "Type is required!" }),

    description: z
        .string({ error: "Description is required!" })
        .min(2, { message: "Description is required!" }),

    date: z
        .string({ error: "Date is required" }).datetime("Invalid date format"),

    location: z
        .string({ error: "Location is required!" })
        .min(2, { message: "Location is required!" }),

    image: z.instanceof(File).refine((file) => file.size > 0, {
        message: "Image photo is required",
    }),

    minParticipants: z
        .number()
        .int()
        .min(1, { message: "Minimum participants must be at least 1!" })
        .default(1),

    maxParticipants: z
        .number({ error: "Max participants is required!" })
        .int()
        .min(1, { message: "Max participants must be at least 1!" }),

    joiningFee: z
        .number()
        .int()
        .min(1, { message: "Joining fee is required!" })
        .default(0),
});

export const updateEventSchema = z.object({
    status: z
        .enum(["OPEN", "FULL", "CANCELLED", "COMPLETED"])
        .optional(),
    title: z
        .string({ error: "Title is required!" })
        .min(1, { message: "Title is required!" })
        .optional(),

    type: z
        .string({ error: "Type is required!" })
        .min(1, { message: "Type is required!" })
        .optional(),

    description: z
        .string({ error: "Description is required!" })
        .min(2, { message: "Description is required!" })
        .optional(),

    date: z
        .string({ error: "Date is required" }).datetime("Invalid date format")
        .optional(),

    location: z
        .string({ error: "Location is required!" })
        .min(2, { message: "Location is required!" })
        .optional(),

    image: z.instanceof(File).refine((file) => file.size > 0, {
        message: "Image photo is required",
    }).optional(),

    minParticipants: z
        .number()
        .int()
        .min(1, { message: "Minimum participants must be at least 1!" })
        .default(1)
        .optional(),

    maxParticipants: z
        .number({ error: "Max participants is required!" })
        .int()
        .min(1, { message: "Max participants must be at least 1!" })
        .optional(),

    joiningFee: z
        .number()
        .int()
        .min(1, { message: "Joining fee is required!" })
        .default(0)
        .optional(),
});