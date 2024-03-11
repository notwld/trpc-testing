"use client";

import { trpc } from "@/server/trpc/client"
import React, { PropsWithChildren, useState } from 'react'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { httpBatchLink } from "@trpc/react-query";

const CustomProvider = ({ children }: PropsWithChildren) => {
    const [queryClient] = useState(() => new QueryClient())

    const [trpcClient] = useState(() =>
        trpc.createClient({
            links: [
                httpBatchLink({
                    url: `${process.env.NEXT_PUBLIC_SERVER_URL}/api/trpc`,
                    fetch(url, options) {
                        return fetch(url, {
                            ...options,
                            credentials: "include",
                        })
                    },
                }),
            ],
        })
    )


    return (
        <trpc.Provider client={trpcClient} queryClient={queryClient}>
            <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </trpc.Provider>

    )
}

export default CustomProvider
