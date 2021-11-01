import {
  Box,
  VStack,
  HStack,
  Heading,
  Button,
  Text,
} from '@chakra-ui/react'
import { InputPass } from 'components/Input/Password'
import { InputEmail } from 'components/Input/Email'
import { SubmitBtn } from 'components/ui/Button/Submit'
// data
import { Link } from 'react-router-dom'
import { paths } from 'services/routes'
// hooks
import { useState } from 'react'

export const LoginModal = () => {
  // inputs
  const form = { email: '', password: '' }
  const [info, setinfo] = useState(form)
  const handleInput = (e) => setinfo((curr) => ({ ...curr, [e.target.name]: e.target.value }))
  const handleSubmit = (e) => e.preventDefault() // enviar info
  // state
  const isValid = info.email !== '' && info.address !== '' && info.password !== ''
  const error = false

  return (
    <>
      <Heading> Login </Heading>

      <Box my={4}>
        <form form method="POST" onSubmit={handleSubmit}>
          <InputEmail handleInput={handleInput} info={info} error={error} name='email' type='email'/>
          <InputPass handleInput={handleInput} info={info} error={error}/>
          <SubmitBtn isValid={isValid} name='Login'/>
        </form>
      </Box>

      <VStack my={2}>
        <Text> OR </Text>
        <Button colorScheme="facebook">Signup with Facebook</Button>
      </VStack>

      <VStack my={2}>
        <Button variant="link">
          <Link to={paths.forgot}> forgot password </Link>
        </Button>
      </VStack>

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
