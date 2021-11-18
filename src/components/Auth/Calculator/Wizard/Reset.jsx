// components
import { Heading, Flex, Button, HStack } from '@chakra-ui/react'
// motion
import { motion } from 'framer-motion'
// data
import { Link } from 'react-router-dom'
import { paths } from 'services/routes'

export const WizarResetPrompt = ({ onReset, ...rest }) => {
  const MotionFlex = motion(Flex)
  return (
    <MotionFlex
      px={4}
      py={4}
      m="auto"
      w="full"
      flexDirection="column"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      {...rest}
    >
      <Heading fontSize="xl"> ¡Gracias por contestar! </Heading>
      <HStack>
        <Button mt={6} size="sm" onClick={onReset} variant="outline">
          Empezar de nuevo
        </Button>
        <Link to={paths.home}>
          <Button mt={6} size="sm">
            Ver mi resultado
          </Button>
        </Link>
      </HStack>
    </MotionFlex>
  )
}
