import z from 'zod'

export const schoolSchema = z.object({
    schoolName: z.string("this field is required").min(1,"school name is required"),
    schoolCity: z.string(),
    schoolAddress: z.string(),
    adminName: z.string("this field is required").min(1,"school name is required"),
    email: z.email("must be an email").min(1,"school name is required"),
    password: z.string().min(8,"must be 8 length"),
    confirmPassword: z.string("this field is required").min(8,"must be 8 length")
})

export type schoolType = z.infer<typeof schoolSchema>