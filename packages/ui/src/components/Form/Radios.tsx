// import React, { useState } from "react";
// import { View, StyleSheet, TouchableOpacity } from "react-native";
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from "react-native-responsive-screen";
// import { RadioButton } from "react-native-paper";
// import MyText from "../MyText";
// import theme from "../../Theme/paper.theme";
// import { I18n } from "i18n-js";

// // ========================================================

// function Radio({ label, checked, checkRadio, value }) {
//   const i18n = new I18n();
//   const textStyle =
//     checked === label
//       ? {
//           fontWeight: "bold",
//           color: theme.colors.primary,
//         }
//       : null;

//   // -------------------------------

//   return (
//     <TouchableOpacity style={styles.radio} onPress={() => checkRadio(value)}>
//       <MyText text={i18n.t(label)} style={textStyle} />
//       <RadioButton
//         color={theme.colors.primary}
//         value={value}
//         status={checked === value ? "checked" : "unchecked"}
//         onPress={() => checkRadio(value)}
//       />
//     </TouchableOpacity>
//   );
// }

// // ========================================================

// export default function Radios({
//   name: radioName,
//   radios = [],
//   placeholder = "Choose Option",
//   getValues,
//   setValue,
// }) {
//   const i18n = new I18n();
//   const [checked, setChecked] = useState(getValues(radioName));

//   // -----------------------------------

//   const checkRadio = (value) => {
//     setValue(radioName, value);
//     setChecked(value);
//   };

//   // -----------------------------------

//   return (
//     <View style={styles.radiosContainer}>
//       <MyText text={i18n.t(placeholder)} style={styles.title} />
//       <View style={styles.radios}>
//         {radios.map(({ label, value }, key) => (
//           <Radio
//             {...{
//               radioName,
//               label,
//               value,
//               setValue,
//               key,
//               checkRadio,
//               checked,
//               radioValue: getValues(radioName),
//             }}
//           />
//         ))}
//       </View>
//     </View>
//   );
// }

// // ========================================================

// const styles = StyleSheet.create({
//   radiosContainer: {
//     marginVertical: hp(2),
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: "bold",
//     color: theme.colors.grey,
//     marginBottom: hp(1),
//   },
//   radios: {},
//   radio: {
//     flexDirection: "row",
//     textAlign: "center",
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingHorizontal: wp(2),
//     borderRadius: hp(1),
//     minWidth: wp(25),
//   },
// });
