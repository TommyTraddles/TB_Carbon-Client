// components
import { VStack, HStack, Text, Button } from '@chakra-ui/react'
import { RegisterForm } from 'components/Auth/Register/Form'
// data
import { Link } from 'react-router-dom'
import { paths } from 'services/routes'

export const Register = () => {
  return (
    <>
      <RegisterForm />
      <VStack my={2}>
        <HStack>
          <Text> Have an account? </Text>
          <Button variant="link">
            <Link to={paths.login}> login </Link>
          </Button>
        </HStack>
      </VStack>
    </>
  )
}