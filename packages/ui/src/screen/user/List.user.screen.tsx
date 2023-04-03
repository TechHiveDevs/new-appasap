import React from 'react'
import { Paragraph, XStack, YStack, Text } from 'tamagui'
import { trpc } from '../../utils/trpc/trpc.api'

export function ListUser() {
    const { data } = trpc.user.getList.useQuery()
    return (
        <YStack f={1} jc="center" ai="center" p="$4" space>
            {data?.map(({ id, name }: any, index: any) => (
                <XStack key={index}>
                    <Paragraph ta="center">
                        <Text>id: {id}</Text>
                    </Paragraph>
                    <Paragraph ta="center">
                        <Text>name: {name}</Text>
                    </Paragraph>
                </XStack>
            ))}
        </YStack>
    )
}
