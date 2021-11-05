// component
import { Heading, Input } from '@chakra-ui/react'
// hooks
// import { useState } from 'react'

export const UpdateUser = () => {
  // inputs
  // const form = { email: '', password: '' }
  // const [info, setinfo] = useState(form)
  // const handleInput = (e) =>
  //   setinfo((curr) => ({ ...curr, [e.target.name]: e.target.value }))
  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   console.info(info)
  // }
  // state
  // const isValid = info.email !== '' && info.password !== ''
  // const error = false

  return (
    <>
      <Heading size="xs"> Account settings </Heading>

      <form method="POST">
        <Heading size="xs"> Profile pic </Heading>
        <Input type="file" />
      </form>

      <form method="POST">
        <Heading size="xs"> Change Username </Heading>
        <Input type="text" />
      </form>

      <form method="POST">
        <Heading size="xs"> Change password </Heading>
        <Input type="password" />
        {/* <InputPass handleInput={handleInput} info={info} error={error} /> */}
      </form>
    </>
  )
}
