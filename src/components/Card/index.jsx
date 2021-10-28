import { Box, useStyleConfig } from '@chakra-ui/react'

export const Card = ({ variant, children, ...rest }) => {
  const styles = useStyleConfig('Card', { variant })

  return (
    <>
      <Box __css={styles} {...rest}>
        {children}
      </Box>
    </>
  )
}
