import { Heading, Button, Input } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { paths } from 'services/routes'

export const ForgotModal = () => {
  return (
    <>
      <Button variant="outline">
        <Link to={paths.login}> back</Link>
      </Button>

      <Heading> Forgot password </Heading>

      <form action="">
        <Input placeholder="email" />
        <Button type="submit"> Send </Button>
      </form>
    </>
  )
}
