import { router } from "./trpc";
import { tasks } from "./router/tasks";

export const appRouter = router({
    tasks,
})

export type AppRouter = typeof appRouter;