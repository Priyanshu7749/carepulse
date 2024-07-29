
import { z } from "zod"
export const UserFormValidation = z.object({
    name: z.string()
    .min(4, "Username must be at least 4 characters long")
    .max(50, "Username must be at most 50 characters long"),
    email: z.string().email("Please enter a valid email"),
    phone: z.string().refine((phone)=>/^\+?[1-9]\d{1,14}$/.test(phone), "Please enter a valid phone number")
})
