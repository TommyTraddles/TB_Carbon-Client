import { Heading, Button, Input } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export const RegisterModal = () => {
  return (
    <>
      <Heading> Register </Heading>

      <form action="">
        <Input placeholder='username' />
        <Input placeholder='email' />
        <Input placeholder='password' />
        <Button type='submit'> Register </Button>
      </form>

      Have an account? 
      <Button variant='outline'>
        <Link to="/login"> login </Link>
      </Button>
    </>
  )
}
