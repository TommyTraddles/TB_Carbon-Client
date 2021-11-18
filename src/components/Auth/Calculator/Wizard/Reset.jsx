// components
import { Heading, Flex, Button, HStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
// data
// import { paths } from 'services/routes'
import { calculatorAPI } from 'services/api' 
// hooks
// import { useHistory } from 'react-router'
import { useCalculatorFormData } from 'services/hooks/use-calculator-form-data'

export const WizarResetPrompt = ({ onReset, ...rest }) => {
  const MotionFlex = motion(Flex)
  const { data } = useCalculatorFormData()
  // const history = useHistory()

  // 
  const handleSubmit = async () => {
    const result = await calculatorAPI.entry(data)
    console.info(result)
    // history.push(paths.home)
  }

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
      <HStack my={2} margin='auto'>
        <Button size="sm" onClick={onReset} variant="outline">
          Empezar de nuevo
        </Button>
        <Button size="sm" onClick={handleSubmit}>
          Ver mi resultado
        </Button>
      </HStack>
    </MotionFlex>
  )
}
