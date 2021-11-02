// components
import { Heading, Box } from '@chakra-ui/react'
import { BackButton } from 'components/ui/Button/Back'
import { InputEmail } from 'components/ui/Input/Email'
import { SubmitBtn } from 'components/ui/Button/Submit'
// hooks
import { useState } from 'react'

export const ForgotModal = () => {
  // inputs
  const form = { email: ''}
  const [info, setinfo] = useState(form)
  const handleInput = (e) => setinfo((curr) => ({ ...curr, [e.target.name]: e.target.value }))
  const handleSubmit = (e) => {
    e.preventDefault() 
    console.info(info)
    // enviar info
  }
  const isValid = info.email !== ''
  const error = false

  return (
    <>
      <BackButton/>

      <Heading> Forgot password </Heading>

      <Box my={4}>
        <form method="POST" onSubmit={handleSubmit}>
          <InputEmail handleInput={handleInput} info={info} error={error} />
          <SubmitBtn isValid={isValid} name='Send email'/>
        </form>
      </Box>

    </>
  )
}
