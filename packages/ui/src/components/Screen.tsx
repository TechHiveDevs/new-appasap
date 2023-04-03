import React from 'react'
import { ScrollView, YStack } from 'tamagui'

export function Screen({ children }: { children: React.ReactNode }) {
  return (
    <ScrollView f={1} bc="$background" ai="center">
      <YStack p="$4">{children}</YStack>
    </ScrollView>
  )
}
