// import React, { useState } from "react";
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   TouchableOpacity,
// } from "react-native";
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from "react-native-responsive-screen";
// import { Avatar as PaperAvatar, IconButton } from "react-native-paper";
// import MyText from "../../MyText";
// import globalStyles from "../../../Theme/global.styles";
// import Form from "../../Form/Form";
// import Input from "../../Form/Input";
// import theme from "../../../Theme/paper.theme";
// import { useUpdateMutation } from "../../../API/api";
// import { useAppSelector, useAppDispatch } from "../../../Store/redux.hooks";
// import { Toast } from "react-native-toast-message/lib/src/Toast";
// import { setUser } from "../../../Store/Slices/auth.slice";
// import * as ImagePicker from "expo-image-picker";
// import * as FileSystem from "expo-file-system";
// import config from "../../../Config/config";
// // =================================================================

// export default function ProfileScreen() {
//   // ---------------------------------------------------

//   const [hideSubmitButton, setHideSubmitButton] = useState(true);
//   const dispatch = useAppDispatch();
//   const { id, name, email, phone, type, photoUrl } = useAppSelector(
//     (state: any) => state?.auth?.user
//   );
//   const accessToken = useAppSelector((state: any) => state?.auth?.accessToken);
//   const defaultValues = { email, name, phone, photoUrl };

//   // ---------------------------------------------------

//   const [updateMyProfile, { isLoading, error }] = useUpdateMutation();

//   // ---------------------------------------------------

//   const [image, setImage] = useState(photoUrl);
//   const onSubmit = async ({ email, name, phone }: any) => {
//     if (
//       defaultValues.email === email &&
//       defaultValues.name === name &&
//       defaultValues.phone === phone &&
//       defaultValues.photoUrl === image
//     ) {
//       return setHideSubmitButton(true);
//     }
//     if (defaultValues.photoUrl !== image) {
//       const uploadResult = await FileSystem.uploadAsync(
//         config.API_URL + "/api/upload?clientId=" + id,
//         image,
//         {
//           httpMethod: "POST",
//           uploadType: FileSystem.FileSystemUploadType.MULTIPART,
//           fieldName: "demo_image",
//           headers: {
//             Authorization: `Bearer ${accessToken}`,
//           },
//         }
//       );
//       const res = JSON.parse(uploadResult.body);
//       if (res?.url) {
//         setImage(config.API_URL + res.url);
//       }
//     }
//     const { data }: any = await updateMyProfile({
//       entity: "user",
//       id,
//       body: { email, name, phone, photoUrl: image },
//     });

//     if (data?.id) {
//       Toast.show({ type: "success", text1: "Updated Successfully" });
//       dispatch(setUser(data));
//     }
//     setHideSubmitButton(true);
//   };
//   const pickImage = async () => {
//     // No permissions request is necessary for launching the image library
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [1, 1],
//       quality: 1,
//     });
//     if (!result.cancelled) {
//       setImage(result.uri);
//     }
//   };
//   // ---------------------------------------------------

//   return (
//     <SafeAreaView style={globalStyles.screen}>
//       <ScrollView>
//         <View style={styles.container}>
//           <TouchableOpacity disabled={hideSubmitButton} onPress={pickImage}>
//             <PaperAvatar.Image
//               size={95}
//               source={
//                 image ? { uri: image } : require("../../../assets/logo.png")
//               }
//               style={styles.image}
//             />
//           </TouchableOpacity>
//           <View style={styles.icon}>
//             <IconButton
//               icon="pencil-box-outline"
//               size={20}
//               color={theme.colors.primary}
//               onPress={() => setHideSubmitButton(!hideSubmitButton)}
//             />
//           </View>
//           <MyText text={name} style={styles.name} />
//           <MyText text={type} style={styles.type} />
//           {/* <MyText text={address} style={styles.address} /> */}
//           <Form
//             {...{
//               defaultValues,
//               isLoading,
//               error,
//               onSubmit,
//               cancelButton: false,
//               btnsColumn: false,
//               title: "",
//               submitText: "save",
//               submitIcon: "check",
//               hideSubmitButton,
//               disabled: hideSubmitButton,
//             }}
//           >
//             <Input name="name" label="name" icon="account" />
//             <Input name="email" label="email" icon="email" />
//             <Input name="phone" label="phone" icon="cellphone" />
//           </Form>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// // =================================================================

// const styles = StyleSheet.create({
//   container: {
//     alignItems: "center",
//     height: hp(80),
//   },
//   image: {
//     marginBottom: hp(1),
//   },
//   icon: {
//     marginTop: -hp(5),
//     marginLeft: wp(23),
//     // top: hp(1),
//   },
//   name: {
//     fontSize: wp(6),
//     fontWeight: "bold",
//   },
//   type: {
//     fontSize: wp(4.5),
//     marginVertical: hp(1),
//     color: "grey",
//     fontWeight: "bold",
//   },
//   address: {
//     color: "grey",
//     fontSize: wp(4),
//     marginBottom: hp(2),
//   },
// });
