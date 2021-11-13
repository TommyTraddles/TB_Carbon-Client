// components
import { Box, HStack, Heading, Button } from '@chakra-ui/react'
import { InputPass } from 'components/ui/Input/Password'
import { InputEmail } from 'components/ui/Input/Email'
import { SubmitBtn } from 'components/ui/Button/Submit'
import { ForgotModal } from 'components/Auth/Forgot-pass/Modal'
import { Modal } from 'components/ui/Modal'
// hooks
import { useState } from 'react'
import { useDisclosure } from '@chakra-ui/hooks'
// fetch
import { authAPI } from 'services/api'

export const LoginForm = ({LoC, RoO}) => {
  // forgot modal
  const { isOpen: FiO, onOpen: FoO, onClose: FoC } = useDisclosure()
  // inputs
  const form = { email: '', password: '' }
  const [info, setinfo] = useState(form)
  const handleInput = (e) => setinfo((curr) => ({ ...curr, [e.target.name]: e.target.value }))
  const handleSubmit = (e) => {
    e.preventDefault()
    authAPI.login(info)
    console.info(info)
  }
  // state
  const isValid = info.email !== '' && info.password !== ''
  const error = false

  return (
    <>
      <Heading> Login </Heading>

      <Box my={4}>
        <form method="POST" onSubmit={handleSubmit}>
          <InputEmail handleInput={handleInput} info={info} error={error} />
          <InputPass handleInput={handleInput} info={info} error={error} />
          <HStack justifyContent='flex-end' my={2}>

          <Button onClick={FoO} my={2} w="full" variant='link'> olvidé mi contraseña </Button>
          <Modal isOpen={FiO} onClose={FoC} content={<ForgotModal LoC={LoC} FoC={FoC} RoO={RoO} />} />

          </HStack>
          <SubmitBtn isValid={isValid} name="Login" />
        </form>
      </Box>
    </>
  )
}
