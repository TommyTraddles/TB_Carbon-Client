// components
import { VStack, HStack, Text, Button } from '@chakra-ui/react'
import { LoginModal } from 'components/Auth/Login/Form'
// data
import { Link } from 'react-router-dom'
import { paths } from 'services/routes'

export const Login = () => {
  return (
    <>
      <LoginModal />
      <VStack my={2}>
        <HStack>
          <Text> Don't have an account? </Text>
          <Button variant="link">
            <Link to={paths.register}> register </Link>
          </Button>
        </HStack>
      </VStack>
    </>
  )
}
