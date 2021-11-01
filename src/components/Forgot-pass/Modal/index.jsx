import { Heading, Box } from '@chakra-ui/react'
import { BackButton } from 'components/ui/Button/Back'
import { InputEmail } from 'components/ui/Input/Email'
import { SubmitBtn } from 'components/ui/Button/Submit'
// data
import { paths } from 'services/routes'
// hooks
import { useState } from 'react'

export const ForgotModal = () => {
  const form = { email: ''}
  const [info, setinfo] = useState(form)
  const handleInput = (e) => setinfo((curr) => ({ ...curr, [e.target.name]: e.target.value }))
  const handleSubmit = (e) => {
    e.preventDefault() 
    // enviar info
  }
  const isValid = info.email !== '' && info.address !== '' && info.password !== ''
  const error = false

  return (
    <>
      <BackButton to={paths.login} />

      <Heading> Forgot password </Heading>

      <Box my={4}>
        <form form method="POST" onSubmit={handleSubmit}>
          <InputEmail handleInput={handleInput} info={info} error={error} />
          <SubmitBtn isValid={isValid} name='Login'/>
        </form>
      </Box>

    </>
  )
}
