import { Heading, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export const Preferences = () => {
  return (
    <>
      <Heading> Preferences </Heading>
      <Button>
        <Link to="/me"> Back</Link>
      </Button>

      <Heading size="md"> image </Heading>
      <Heading size="md"> username </Heading>
      <Heading size="md"> email </Heading>
      <Heading size="md"> password </Heading>
      <Heading size="md"> other info </Heading>
      <Heading size="md"> delete account </Heading>
    </>
  )
}
