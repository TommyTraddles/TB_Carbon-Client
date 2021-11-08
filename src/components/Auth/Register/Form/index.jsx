// components
import { Heading, Box } from '@chakra-ui/react'
import { InputEmail } from 'components/ui/Input/Email'
import { InputText } from 'components/ui/Input/Text'
import { InputPass } from 'components/ui/Input/Password'
import { SubmitBtn } from 'components/ui/Button/Submit'
// hooks
import { useState } from 'react'

export const RegisterForm = () => {
  // inputs
  const form = { username: '', email: '', password: '' }
  const [info, setinfo] = useState(form)
  const handleInput = (e) => setinfo((curr) => ({ ...curr, [e.target.name]: e.target.value }))
  const handleSubmit = (e) => {
    e.preventDefault()
    console.info(info)
  }
  const isValid =
    info.email !== '' && info.username !== '' && info.password !== ''
  // state
  const error = false

  return (
    <>
      <Heading> Registro </Heading>

      <Box my={4}>
        <form method="POST" onSubmit={handleSubmit}>
          <InputEmail handleInput={handleInput} info={info} error={error}/>
          <InputText handleInput={handleInput} info={info} error={error} name='username' type='text'/>
          <InputPass handleInput={handleInput} info={info} error={error} />
          <SubmitBtn isValid={isValid} name="Registro" />
        </form>
      </Box>
    </>
  )
}
