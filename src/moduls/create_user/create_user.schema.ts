import z from 'zod'

export const userSchema = z.object({
    name: z.string(),
    email: z.email(),
    password: z.string(),
    role: z.enum(["student", "teacher"])
})

export type userType = z.infer<typeof userSchema>