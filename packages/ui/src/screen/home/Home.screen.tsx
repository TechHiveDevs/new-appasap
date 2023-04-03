import React from 'react'
import { H3, Separator, YStack } from 'tamagui'
// import { useLink } from 'solito/link'
import { Form } from '../../components/Form/Form'
import { Input } from '../../components/Form/Input'
import { Screen } from '../../components/Screen'
import { trpc } from '../../utils/trpc/trpc.api'

// =================================================================

export function HomeScreen() {
  // const linkProps = useLink({href: '/user/mario'})
  const { data, error } = trpc.user.getList.useQuery()

  // const { mutate } = trpc.user.createOne.({})

  return (
    <Screen>
      <YStack space="$4" maw={600}>
        <H3 ta="center">Welcome to Mario Universal App Tamagui .</H3>
        <Separator />
        <Form showCancelButton={true}>
          <Input name="fname" label="fname" placeholder="fname" />
          <Input name="lname" label="lname" />
          <Input name="email" />
          <Input name="password" />
          <Input name="confirmPassword" />
        </Form>
        <Separator />
        {/* {data.map(() => {})} */}
        {/* {data?.map(({ id, name }, index) => (
          <XStack key={index}>
            <Paragraph ta="center">
              <Text>id: {id}</Text>
            </Paragraph>
            <Paragraph ta="center">
              <Text>name: {name}</Text>
            </Paragraph>
          </XStack>
        ))} */}
        {/* <Separator /> */}
      </YStack>
      {/* <XStack>
        <Button {...linkProps}>Users</Button>
      </XStack>
      <XStack>
        <Button {...useLink({ href: 'ListUser' })}>List Users</Button>
        <Button {...useLink({ href: 'CreateUser' })}>Create Users</Button>
        <Button {...useLink({ href: 'ShowUser' })}>Create Users</Button>
        <Button {...useLink({ href: 'UpdateUser' })}>Create Users</Button>
      </XStack> */}
      {/* <SheetDemo /> */}
    </Screen>
  )
}
