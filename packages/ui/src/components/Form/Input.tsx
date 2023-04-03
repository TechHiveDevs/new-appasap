/**
 * Input Component Module
 * @author MarioMonir
 */

// --------------------------------------------------------

import React from 'react'
import { Controller, Control } from 'react-hook-form'
import { Input as TamaguiInput, YStack, XStack, Text } from 'tamagui'
// import { I18n } from 'i18n-js'

// ========================================================

type InputProps = {
  name: string
  label?: string
  placeholder?: string
  hideLabel?: boolean
  control?: Control
}

// ========================================================

export function Input({ name, label, placeholder, control, hideLabel = false }: InputProps) {
  // const {
  //   name,
  //   // control,
  //   // errors,
  //   // numberOfLines = 1,
  //   // required = true,
  //   // inputWidth = 90,
  //   // icon = name === 'password' ? 'lock' : 'account',
  //   // mode = '',
  //   // autoCorrect = false,
  //   // autoCapitalize = 'none',
  //   // secureTextEntry = null,
  //   placeholder = '',
  //   label = '',
  //   size = '$4',
  // } = props
  // const i18n = new I18n()

  // --------------------------------------------

  // const [passwordVisible, setPasswordVisible] = useState(true)
  // const widthStyle = { width: wp(inputWidth + '%') }
  // const styleTextArea =
  //   numberOfLines > 1 ? { textAlignVertical: 'top' } : { textAlignVertical: 'center' }

  // --------------------------------------------

  // const toggleVisible = () => setPasswordVisible(!passwordVisible)

  // --------------------------------------------

  // const requiredBorder = errors ? (errors[name] ? 'red' : null) : null

  // --------------------------------------------

  // const render = ({ field: { onChange: onChangeText, onBlur, value } }: any) => (
  //   <TamaguiInput
  //     style={{
  //       ...styles.input,
  //       ...styleTextArea,
  //       // borderRaduis: 20,
  //     }}
  //     {...{
  //       mode,
  //       autoCorrect,
  //       autoCapitalize,
  //       onChangeText,
  //       value,
  //       onBlur,
  //       outlineColor: requiredBorder,
  //       ...props,
  //       secureTextEntry: secureTextEntry ? passwordVisible : null,
  //       // label: capitalize(label || name),
  //     }}
  //     // theme={{ roundness: 15 }}
  //     // placeholderTextColor={theme.colors.accent}
  //     textBreakStrategy={'balanced'}
  //     // left={<TextInput.Icon name={icon} color={theme.colors.grey} />}
  //     // right={
  //     //   secureTextEntry ? (
  //     //     <TextInput.Icon name={passwordVisible ? 'eye' : 'eye-off'} onPress={toggleVisible} />
  //     //   ) : null
  //     // }
  //   />
  // )

  // --------------------------------------------

  // return (
  //   <View
  //     style={{
  //       ...styles.inputContainer,
  //       // ...widthStyle
  //     }}
  //   >
  //     <Controller {...{ name, control, render }} rules={{ required }} />
  //     {/* {errors && errors[name] ? (
  //       <HelperText type="error" visible={errors[name]} style={{ textAlign: 'right' }}>
  //         {i18n.t('required')}
  //       </HelperText>
  //     ) : null} */}
  //   </View>
  // )

  // --------------------------------------------

  // const render = ({ field: { onChange: onChangeText, onBlur, value } }: any) => (
  return (
    <Controller
      {...{ name, control }}
      render={() => (
        <XStack marginHorizontal="$1" marginVertical="$2">
          <YStack f={1}>
            {!hideLabel && <Text paddingHorizontal="$1.5">{label || name}</Text>}
            <TamaguiInput placeholder={placeholder || label || name} />
          </YStack>
        </XStack>
      )}
    />
  )
}

// ======================================================

// const styles = StyleSheet.create({
//   info: {},
//   txtIcon: {},
//   placeholder: {},
//   inputContainer: {
//     alignSelf: 'center',
//     // marginVertical: hp('1.2%'),
//   },
//   input: {
//     backgroundColor: 'transparent',
//   },
//   error: {},
//   requiredBorder: {
//     backgroundColor: 'green',
//     borderColor: 'red',
//   },
// })
