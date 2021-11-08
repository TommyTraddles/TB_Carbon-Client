// components
import { LoginForm, } from 'components/Auth/Login/Form'
import { Button, Text } from '@chakra-ui/react'

export const RegisterModal = ({RoC, LoO}) => {
  const handleClick = () => {
    RoC()
    LoO()
  }

  return (
    <>
      <LoginForm />
      <Text> ¿Ya tienes cuenta? <Button variant='link' onClick={handleClick}> login </Button> </Text>
    </>
  )
}
