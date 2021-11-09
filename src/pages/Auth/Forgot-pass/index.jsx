// components
import { Text, HStack, Button } from '@chakra-ui/react'
import { ForgotForm } from 'components/Auth/Forgot-pass/Form'
// data
import { paths } from 'services/routes'
import { Link } from 'react-router-dom'

export const Forgot = () => {
  return (
    <>
      <ForgotForm />
      <HStack>
        <Text> ¿No tienes cuenta? </Text>
        <Button variant="link">
          <Link to={paths.register}> Registro </Link>
        </Button>
      </HStack>
    </>
  )
}
