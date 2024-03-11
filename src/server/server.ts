import next from "next"
import * as trpcExpress from "@trpc/server/adapters/express"
import express from "express"
import { inferAsyncReturnType } from "@trpc/server"

const PORT = Number(process.env.PORT) || 3000

const nextApp = next({
    dev: process.env.NODE_ENV !== "production",
    port: PORT,
})

const nextHandler = nextApp.getRequestHandler()


const app = express()

export const createContext = async ({
    req,
    res,
}: trpcExpress.CreateExpressContextOptions) => {
    return {
        req,
        res,
    }
} 

export type Context = inferAsyncReturnType<typeof createContext>

const init = async () => {

    app.use((req, res) => nextHandler(req, res))
    await nextApp.prepare()
        .then(() => {
            app.listen(PORT, () => {
                console.log(`> Ready on http://localhost:${PORT}`)
            })
        })
}


init()
