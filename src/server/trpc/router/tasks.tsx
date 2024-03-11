import { publicProcesdure,router } from "../trpc";
import {z} from "zod"

export const tasks = router({
    getTasks: publicProcesdure
    .input(
        z.object({
            name: z.string(),
            description: z.string(),
        })
    )
    .query(async ({ctx,input}) =>{
        return {
            name: input.name,
            description: input.description,
        }
    })
})