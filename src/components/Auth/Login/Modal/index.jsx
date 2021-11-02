// components
import {
  Box,
  VStack,
  Heading,
  Button,
  Text,
} from '@chakra-ui/react'
import { InputPass } from 'components/ui/Input/Password'
import { InputEmail } from 'components/ui/Input/Email'
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
  const handleSubmit = (e) => {
    e.preventDefault() 
    console.info(info)
    // enviar info
  }
  // state
  const isValid = info.email !== '' && info.username !== '' && info.password !== ''
  const error = false

  return (
    <>
      <Heading> Login </Heading>

      <Box my={4}>
        <form method="POST" onSubmit={handleSubmit}>
          <InputEmail handleInput={handleInput} info={info} error={error}/>
          <InputPass handleInput={handleInput} info={info} error={error}/>
          <SubmitBtn isValid={isValid} name='Login'/>
        </form>
      </Box>

      <VStack my={2}>
        <Text> OR </Text>
        <Button colorScheme="facebook" w="full" variant='outline'> Continue with Facebook</Button>
      </VStack>

      <VStack my={2}>
        <Button variant="link" >
          <Link to={paths.forgot}> forgot password </Link>
        </Button>
      </VStack>
    </>
  )
}
