import React, { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { httpBatchLink } from '@trpc/client'
import { configs } from '@my/api/src/helpers/configs/configs'
import { createTRPCProxyClient, createTRPCReact } from '@trpc/react-query'
import { AppRouter } from '@my/api/src/helpers/exports'

// =================================================================

export const trpcClientOptions: any = {
  //   transformer,
  links: [
    httpBatchLink({
      headers: async () => ({
        Authorization: 'should be a token' /*authToken*/,
      }),
      url: configs.API_URL,
    }),
  ],
}

// =================================================================

export const trpcNativeClient = createTRPCProxyClient<AppRouter>(trpcClientOptions)
export const trpcReactClient = createTRPCReact<AppRouter>()

// =================================================================

export const TRPCProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [queryClient] = React.useState(() => new QueryClient())
  const [trpcClient] = useState(() => trpcReactClient.createClient(trpcClientOptions))

  return (
    <trpcReactClient.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpcReactClient.Provider>
  )
}
