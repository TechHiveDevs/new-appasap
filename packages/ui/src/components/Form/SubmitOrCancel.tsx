import { XStack } from 'tamagui'
import { Button } from './Button'
import { IconProps } from '@tamagui/lucide-icons/types/IconProps'
import { UseFormHandleSubmit } from 'react-hook-form'

// ----------------------------------------------------------------

type SubmitOrCancelProps = {
  handleSubmit: UseFormHandleSubmit<Object>
  onSubmit: () => void
  onCancel: () => void
  submitIcon?: React.NamedExoticComponent<IconProps>
  cancelIcon?: React.NamedExoticComponent<IconProps>
  showSubmitButton?: boolean
  showCancelButton?: boolean
  submitText?: string
  cancelText?: string
}

// ----------------------------------------------------------------

export function SubmitOrCancel({
  handleSubmit,
  onSubmit,
  onCancel,
  submitIcon,
  cancelIcon,
  showSubmitButton = true,
  showCancelButton = false,
  submitText = 'Submit',
  cancelText = 'Cancel',
}: SubmitOrCancelProps) {
  if (!(showSubmitButton || showCancelButton)) return <></>
  return (
    <XStack jc="space-around" mt="$3">
      {showCancelButton && <Button text={cancelText} onPress={onCancel} icon={cancelIcon} />}
      {showSubmitButton && <Button text={submitText} onPress={handleSubmit(onSubmit)} icon={submitIcon} />}
    </XStack>
  )
}

// ----------------------------------------------------------------

// <View style={btnsColumn ? styles.container2 : styles.container1}>
//   {cancelButton && (
//     <Button
//       icon={cancelIcon}
//       text={cancelText}
//       mode="outlined"
//       onPress={onCancel}
//       width={btnsColumn ? wp(90) : wp(40)}
//     />
//   )}
//   {submitButton && (
//     <Button
//       loading={isLoading}
//       text={submitText}
//       icon={submitIcon}
//       onPress={handleSubmit(onSubmit)}
//       width={btnsColumn ? wp(90) : wp(40)}
//     />
//   )}
// </View>
// isLoading,
// handleSubmit,
// submitButton = true,
// submitIcon = 'check',
// cancelIcon = 'cancel',
// cancelButton = false,
// submitText = 'Submit',
// cancelText = 'Cancel',
// onSubmit = (values) => null,
// onCancel = null,
// btnsColumn = true,
