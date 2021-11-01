// components
import { VStack, HStack } from '@chakra-ui/react'
import { Heading, Button, Text, Box } from '@chakra-ui/react'
import { InputEmail } from 'components/ui/Input/Email'
import { InputText } from 'components/ui/Input/Text'
import { InputPass } from 'components/ui/Input/Password'
import { SubmitBtn } from 'components/ui/Button/Submit'
// data
import { Link } from 'react-router-dom'
import { paths } from 'services/routes'
// hooks
import { useState } from 'react'

export const RegisterModal = () => {
  // inputs
  const form = { username: '', email: '', password: '' }
  const [info, setinfo] = useState(form)
  const handleInput = (e) => setinfo((curr) => ({ ...curr, [e.target.name]: e.target.value }))
  const handleSubmit = (e) => {
    e.preventDefault()
    console.info(info)
    // enviar info
  }
  const isValid =
    info.email !== '' && info.username !== '' && info.password !== ''
  // state
  const error = false

  return (
    <>
      <Heading> Register </Heading>

      <Box my={4}>
        <form form method="POST" onSubmit={handleSubmit}>
          <InputEmail handleInput={handleInput} info={info} error={error}/>
          <InputText handleInput={handleInput} info={info} error={error} name='username' type='text'/>
          <InputPass handleInput={handleInput} info={info} error={error} />
          <SubmitBtn isValid={isValid} name="Register" />
        </form>
      </Box>

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
