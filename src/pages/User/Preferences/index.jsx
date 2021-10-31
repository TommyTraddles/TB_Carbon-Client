import { Heading, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { paths } from 'services/routes'  

export const Preferences = () => {
  return (
    <>
      <Heading> Preferences </Heading>
      <Button>
        <Link to={paths.profile}> Back</Link>
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
