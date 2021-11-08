// components
import { VStack, HStack, Text, Button } from '@chakra-ui/react'
import { LoginForm } from 'components/Auth/Login/Form'
// data
import { Link } from 'react-router-dom'
import { paths } from 'services/routes'

export const Login = () => {
  return (
    <>
      <LoginForm />
      <VStack my={2}>
        <HStack>
          <Text> ¿No tienes cuenta? </Text>
          <Button variant="link">
            <Link to={paths.register}> Registro </Link>
          </Button>
        </HStack>
      </VStack>
    </>
  )
}
