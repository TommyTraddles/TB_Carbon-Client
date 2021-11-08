// components
import { LoginForm, } from 'components/Auth/Login/Form'
import { Button, Text } from '@chakra-ui/react'

export const LoginModal = ({LoC, RoO}) => {
  const handleClick = () => {
    LoC()
    RoO()
  }

  return (
    <>
      <LoginForm />
      <Text> ¿No tienes cuenta? <Button variant='link' onClick={handleClick}> Registrar </Button> </Text>
    </>
  )
}
