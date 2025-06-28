"use client";

import { FC, PropsWithChildren } from 'react'
import { queryClient, trpc, trpcClient } from "../trpc/client";
import { QueryClientProvider } from '@tanstack/react-query';

interface TrpcProviderProps extends PropsWithChildren {
    
}

const TrpcProvider: FC<TrpcProviderProps> = ({ children }) => {
    return <trpc.Provider client={trpcClient} queryClient={queryClient}>
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    </trpc.Provider>
}

export default TrpcProvider