import { config } from '../utils/tamagui/tamagui.config'
import { NavigationProvider } from './navigation'
import { TamaguiProvider, TamaguiProviderProps } from 'tamagui'
import { TRPCProvider } from './trpc/trpc.provider'

export function Provider({ children, ...rest }: Omit<TamaguiProviderProps, 'config'>) {
  return (
    <TamaguiProvider config={config} disableInjectCSS defaultTheme="light" {...rest}>
      <NavigationProvider>
        <TRPCProvider>{children}</TRPCProvider>
      </NavigationProvider>
    </TamaguiProvider>
  )
}
