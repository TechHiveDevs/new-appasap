import 'expo-dev-client'
import React from 'react'
import { Provider } from '@my/ui/src/provider/provider'
import { MobileNavigator } from '@my/ui/src/navigator/mobile.navigator'
import { useFonts } from 'expo-font'

export default function App() {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })

  if (!loaded) return null

  return (
    <Provider>
      <MobileNavigator />
    </Provider>
  )
}
