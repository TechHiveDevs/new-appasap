// // @ts-nocheck
// import { View, StyleSheet } from 'react-native'
// import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
// import { useAuthMe } from '../../Utils/auth.hook'
// import Button from '../Form/Button'
// import { useAppSelector } from '../../Store/redux.hooks'

// // =================================================================

// export default function SideDrawer({ navigation: { closeDrawer, navigate } }: any) {
//   const { logout } = useAuthMe()
//   const profile = useAppSelector((s: any) => s?.auth?.user)
//   const btns = [{ name: 'logout', onPress: () => logout(), icon: 'logout' }]

//   // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

//   return (
//     <View style={styles.container}>
//       {btns?.map(({ name, onPress, icon = '' }: any, key) => (
//         <Button
//           key={key}
//           text={name}
//           icon={icon}
//           onPress={onPress}
//           width={wp(50)}
//           maxWidth={wp(50)}
//         />
//       ))}
//     </View>
//   )
// }

// // =================================================================

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// })
