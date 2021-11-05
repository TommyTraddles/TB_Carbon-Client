// components
import { Heading, Text, Input } from '@chakra-ui/react'
import { SubmitBtn } from 'components/ui/Button/Submit'
// hooks
import { useState, useEffect } from 'react'
import { user } from 'assets/data'

export const DeleteAccount = () => {
  // inputs
  const form = { username: '', typed: '' }
  const [info, setinfo] = useState(form)
  useEffect(() => {
    setinfo((curr) => ({ ...curr, username: user.user }))
  }, [])
  const handleInput = (e) =>
    setinfo((curr) => ({ ...curr, [e.target.name]: e.target.value }))
  const handleSubmit = (e) => {
    e.preventDefault()
    console.info(info)
  }
  const isValid = info.typed === info.username

  return (
    <>
      <Heading size="xs"> Delete Account </Heading>
      <Text> Please type <b>{user.user}</b> to confirm. </Text>

      <form method="POST" onSubmit={handleSubmit}>
        <Input onChange={handleInput} value={info.typed} name="typed" />
        <SubmitBtn
          colorScheme="red"
          isValid={isValid}
          name="I understand, delete my account"
        />
      </form>
    </>
  )
}
