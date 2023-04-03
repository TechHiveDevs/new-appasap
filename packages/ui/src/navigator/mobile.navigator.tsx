import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen } from '../screen/home/Home.screen'
import { ListUser } from '../screen/user/List.user.screen'
import { ShowUser } from '../screen/user/Show.user.screen'
import { CreateUser } from '../screen/user/Create.user.screen'
import { UpdateUser } from '../screen/user/Update.user.screen'

const Stack = createNativeStackNavigator<{
  home: undefined
  CreateUser: undefined
  ListUser: undefined
  ShowUser: { id: string }
  UpdateUser: { id: string }
  'user-detail': { id: string }
}>()

export function MobileNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          title: 'Home',
        }}
      />
      <Stack.Screen
        name="CreateUser"
        component={CreateUser}
        options={{
          title: 'Create User',
        }}
      />
      <Stack.Screen
        name="ListUser"
        component={ListUser}
        options={{
          title: 'List Users',
        }}
      />
      <Stack.Screen
        name="ShowUser"
        component={ShowUser}
        options={{
          title: 'Show User',
        }}
      />
      <Stack.Screen
        name="UpdateUser"
        component={UpdateUser}
        options={{
          title: 'Update User',
        }}
      />
    </Stack.Navigator>
  )
}
