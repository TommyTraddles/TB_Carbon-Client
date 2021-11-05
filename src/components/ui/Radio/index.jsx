// components
import { Box } from '@chakra-ui/react'
// hooks
import { useStyleConfig } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/color-mode'
import { useRadio } from '@chakra-ui/radio'

// 🔥 DOING
export function RadioCard(props) {
  // styling
  const styles = useStyleConfig('Radiocard', { props })
  const bg = useColorModeValue('gray.50', 'whiteAlpha.50')
  // radio
  const { getInputProps, getCheckboxProps } = useRadio(props)
  const input = getInputProps()
  const checkbox = getCheckboxProps()

  return (
    <Box as="label" w="full">
      <input {...input} />
      <Box {...checkbox} __css={styles} bg={bg}>
        {props.children}
      </Box>
    </Box>
  )
}