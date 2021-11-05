// components
import { Box } from '@chakra-ui/react'
import { Card } from 'components/ui/Card'
// hooks
import { useStyleConfig } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/color-mode'
import { useRadio } from '@chakra-ui/radio'

// 🔥 DON'T WORK
// export const RadioCard = ({ variant, children, ...rest }) => {
//   // styling
//   const styles = useStyleConfig('Radiocard', { variant })
//   const bg = useColorModeValue('red.50', 'whiteAlpha.50')
//   // radio
//   const { getInputProps, getCheckboxProps } = useRadio(children)
//   const input = getInputProps()
//   const checkbox = getCheckboxProps()

//   return (
//     <>
//       <Box as="label">
//         <input {...input} />
//         <Box {...checkbox} __css={styles} bg={bg} {...rest}>
//           {children}
//         </Box>
//       </Box>
//     </>
//   )
// }

// 🔥 WORKS
export function RadioCard(props) {
  const { getInputProps, getCheckboxProps } = useRadio(props)

  const input = getInputProps()
  const checkbox = getCheckboxProps()

  return (
    <Box as="label" w="full">
      <input {...input} />
      <Card
        {...checkbox}
        w="90"
        _checked={{
          bg: 'teal.600',
          color: 'white',
          borderColor: 'teal.600',
        }}
        _focus={{
          boxShadow: 'outline',
        }}
      >
        {props.children}
      </Card>
    </Box>
  )
}
