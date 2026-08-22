import z from 'zod'

export const branchSchema = z.object({
    branchName: z.string(),
    branchAddress: z.string(),
})

export type branchType = z.infer<typeof branchSchema>