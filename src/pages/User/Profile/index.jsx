import { Heading, Button, Divider } from '@chakra-ui/react'
import { ProfileCard } from 'components/Profile/Card'
import { Link } from 'react-router-dom'

export const Profile = () => {
  return (
    <>
      <Heading> Profile </Heading>
      <Button>
        <Link to="login"> login</Link>
      </Button>
      <Button>
        <Link to="login"> register</Link>
      </Button>

      <Divider />
      Loged?
      <ProfileCard />

      <Divider />
      <Button>
        <Link to="pricing"> take action</Link>
      </Button>
      <Button>
        <Link to="me/preferences"> edit profile</Link>
      </Button>

      <Divider />
      Loged?
      <Button>
        <Link to="/"> signout</Link>
      </Button>

    </>
  )
}
