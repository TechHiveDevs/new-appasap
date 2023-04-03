/**
 * Button Component Module
 * @author MarioMonir
 */

// ----------------------------------------------------------------

import { Button as TamaguiButton, Text, SizeTokens } from 'tamagui'
import { Activity } from '@tamagui/lucide-icons'
import { IconProps } from '@tamagui/lucide-icons/types/IconProps'
// import { I18n } from "i18n-js";

// ----------------------------------------------------------------

type ButtonProps = {
  text: string
  onPress: () => void
  size?: SizeTokens
  icon?: React.NamedExoticComponent<IconProps>
}

// ----------------------------------------------------------------

export function Button({
  text = 'Buttton Text',
  onPress,
  size = '$5',
  icon = Activity,
}: ButtonProps) {
  // const i18n = new I18n()
  return (
    <TamaguiButton {...{  size, onPress, iconAfter:icon }}>
      <Text>{text}</Text>
    </TamaguiButton>
  )
}

// ----------------------------------------------------------------

// labelStyle={{ ...styles.labelStyle, ...color }}
// {...{ icon, mode, onPress, loading, uppercase, disabled, ...props }}
// text = 'Submit',
// onPress = null,
// icon = 'check',
// loading = false,
// mode = 'contained',
// uppercase = false,
// width = wp(95),
// maxWidth = wp(95),
// disabled = false,
// paddingVertical = wp(0.9),
// ...props
