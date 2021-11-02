// components
import { Heading, Text, Input } from '@chakra-ui/react'
import { SubmitBtn } from 'components/ui/Button/Submit'
// hooks
import { useState } from 'react'

export const DeleteAccount = () => {
  // inputs
  const form = { username: 'username', typed: '' }
  const [info, setinfo] = useState(form)
  const handleInput = (e) =>
    setinfo((curr) => ({ ...curr, [e.target.name]: e.target.value }))
  const handleSubmit = (e) => {
    e.preventDefault()
    console.info(info)
    // enviar info
  }
  // state
  const isValid = info.typed === info.username

  return (
    <>
      <Heading size="xs"> Delete Account </Heading>
      <Text> Please type your username to confirm. </Text>
      
      <form method="POST" onSubmit={handleSubmit}>
        <Input onChange={handleInput} value={info.typed} name='typed' />
        <SubmitBtn colorScheme='red' isValid={isValid} name="I understand, delete my account" />
      </form>
    </>
  )
}
