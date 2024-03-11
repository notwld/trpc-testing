import { initTRPC } from "@trpc/server";
import { Context } from "../server";

const t = initTRPC.context<Context>().create();
const middleware = t.middleware;

const authMiddleware = middleware(async ({ ctx, next }) => {
    return next({
        ctx: {

        },
    })
})

export const router = t.router
export const publicProcesdure = t.procedure;
export const privateProcesdure = t.procedure.use(authMiddleware);
