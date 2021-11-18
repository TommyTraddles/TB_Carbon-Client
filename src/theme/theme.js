// chakra
import { extendTheme, withDefaultColorScheme, withDefaultVariant } from '@chakra-ui/react'
// foundation
import { styles } from 'theme/global'
import { colors } from 'theme/foundations/colors'
import { fonts } from 'theme/foundations/fonts'
import { colorScheme } from 'theme/foundations/colorScheme'
import { variant } from 'theme/foundations/variant'
// components
import { Button } from 'theme/components/button'
import { Card } from 'theme/components/card'
import { Checkbox } from 'theme/components/checkbox'
import { Input } from 'theme/components/input'
import { Radiocard } from './components/radiocard'
import { Steps } from './components/steps'

export const theme = extendTheme(
  {
    styles,
    colors,
    fonts,
    // transition: "all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    components:{
      Button,
      Card,
      Checkbox,
      Input,
      Radiocard,
      Steps,
    },
  },
  withDefaultColorScheme(colorScheme),
  withDefaultVariant(variant)
)