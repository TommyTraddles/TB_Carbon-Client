import { Heading, Button, Input } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { paths } from 'services/routes'

export const LoginModal = () => {
  return (
    <>
      <Heading> Login </Heading>
      <form action="">
        <Input placeholder="email" />
        <Input placeholder="password" />
        <Button type="submit"> Login </Button>
      </form>
      <Button variant="link">
        <Link to={paths.forgot}> forgot password </Link>
      </Button>
      <br />
      Don't have an account?
      <Button variant="outline">
        <Link to={paths.register}> register </Link>
      </Button>
      <br />
      - Or-
      <br />
      <Button colorScheme="secondary">Signup with Google</Button>
    </>
  )
}
