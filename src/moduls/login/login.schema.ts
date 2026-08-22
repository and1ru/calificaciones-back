import z from 'zod'

export const loginSchema = z.object({
    email: z.email("must be an email").min(1,"this field is required"),
    password: z.string("is required").min(8, "must be at least 8 length")
})

export type loginType = z.infer<typeof loginSchema>