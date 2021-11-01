// components
import { VStack, HStack, Text, Button } from '@chakra-ui/react'
import { RegisterModal } from 'components/Auth/Register/Modal'
// data
import { Link } from 'react-router-dom'
import { paths } from 'services/routes'

export const Register = () => {
  return (
    <>
      <RegisterModal />
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