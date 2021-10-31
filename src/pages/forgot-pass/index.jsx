import { Heading, Button, Input } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export const Forgot = () => {
  return (
    <>
      <Button variant="outline">
        <Link to="/login"> back</Link>
      </Button>

      <Heading> Forgot password </Heading>

      <form action="">
        <Input placeholder="email" />
        <Button type="submit"> Send </Button>
      </form>
    </>
  )
}
