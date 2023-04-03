/**
 * Form Component Module
 * @author MarioMonir
 */

// ----------------------------------------------------------------

import React from 'react'
import { XStack, YStack, Text } from 'tamagui'
import { useForm } from 'react-hook-form'
import { IconProps } from '@tamagui/lucide-icons/types/IconProps'
import { SubmitOrCancel } from './SubmitOrCancel'
// import { I18n } from "i18n-js";

// ----------------------------------------------------------------

type FormProps = {
  title?: string
  defaultValues?: Object
  children?: React.ReactNode
  disabled?: boolean
  onSubmit?: () => void
  onCancel?: () => void
  submitText?: string
  cancelText?: string
  showSubmitButton?: boolean
  showCancelButton?: boolean
  submitIcon?: React.NamedExoticComponent<IconProps>
  cancelIcon?: React.NamedExoticComponent<IconProps>
}

// ----------------------------------------------------------------

export function Form({
  title = 'Form Title',
  defaultValues,
  children: childrens,
  showSubmitButton = true,
  showCancelButton = false,
  onSubmit = () => {},
  onCancel = () => {},
  submitText,
  cancelText,
  submitIcon,
  cancelIcon,
  disabled = false,
}: FormProps) {
  // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
  // const i18n = new I18n()
  const {
    control,
    handleSubmit,
    getValues,
    setValue,
    formState,
    formState: { isValid, errors, isSubmitted },
  } = useForm({
    defaultValues,
  })

  // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

  return (
    <YStack>
      <XStack jc={'center'}>{!!title && <Text fontSize={20}>{title}</Text>}</XStack>
      {React.Children.map(
        childrens,
        (child: any, key) =>
          child &&
          React.cloneElement(child, {
            ...child.props,
            key,
            getValues,
            setValue,
            control,
            errors: formState?.errors,
            disabled,
          })
      )}
      <SubmitOrCancel
        {...{
          handleSubmit,
          showSubmitButton,
          showCancelButton,
          onSubmit,
          onCancel,
          submitIcon,
          cancelIcon,
          submitText,
          cancelText,
        }}
      />
    </YStack>
  )
}

// ----------------------------------------------------------------

// const styles = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//     flex: 1,
//   },
//   // title: { marginTop: hp(3), fontSize: 25, color: theme.colors.primary },
//   body: {
//     justifyContent: 'space-between',
//     flex: 1,
//     // height: hp(85),
//   },
//   scroll: {
//     // alignSelf: "center",
//     // textAlign: "center",
//     // width: wp(100),
//   },
// })
// ...reset
// isLoading = false,
// error = null,
// useValues = null,
// btnsColumn,
// hideSubmitButton = false,
// {
/* {!hideSubmitButton && (
          <SubmitOrCancel
            {...{
              isLoading,
              handleSubmit,
              submitButton,
              submitText,
              submitIcon,
              onSubmit,
              cancelButton,
              cancelText,
              cancelIcon,
              onCancel,
              btnsColumn,
            }}
          />
        )} */
// }
// useValues = getValues

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

/** Dont remove this section  */
// if (Object.keys(errors)?.length) {
//   Object.keys(errors).forEach((e) => {
//     Toast.show({
//       type: "error",
//       text1: `🧐   ${e}  ${errors[e]?.type}   `,
//     });
//   });
// }

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

/** Dont remove this section it's a very important section */
// if (isSubmitted) {
//   Object.keys(getValues()).forEach((key) => {
//     if (!getValues()[key]) {
//       Toast.show({
//         type: "error",
//         text1: `🧐  ${i18n.t(key)}  ${i18n.t("required")} `,
//       });
//     }
//   });
// }

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

// if (error) if (error) return <LoadingOrErrorScreen {...{ error }} />;
