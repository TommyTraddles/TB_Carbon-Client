import { Heading, Box } from '@chakra-ui/react'
import { BackButton } from 'components/ui/Button/Back'
import { InputPass } from 'components/ui/Input/Password'
import { SubmitBtn } from 'components/ui/Button/Submit'
// data
import { paths } from 'services/routes'
// hooks
import { useState } from 'react'

export const ResetModal = () => {
  const form = { oldpass: '', newpass:''}
  const [info, setinfo] = useState(form)
  const handleInput = (e) => setinfo((curr) => ({ ...curr, [e.target.name]: e.target.value }))
  const handleSubmit = (e) => {
    e.preventDefault() 
    // enviar info
  }
  const isValid = info.oldpass !== '' && info.newpass !== ''
  const error = false

  return (
    <>
      <Heading> Reset password </Heading>

      <Box my={4}>
        <form form method="POST" onSubmit={handleSubmit}>
          <InputPass handleInput={handleInput} info={info} error={error} value='oldpass' name='New'/>
          <InputPass handleInput={handleInput} info={info} error={error} value='newpass' name='Repeat pass'/>
          <SubmitBtn isValid={isValid} name='Change password'/>
        </form>
      </Box>

    </>
  )
}
