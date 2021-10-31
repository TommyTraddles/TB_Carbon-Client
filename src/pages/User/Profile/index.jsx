import { Heading, Button, Divider } from '@chakra-ui/react'
import { ProfileCard } from 'components/Profile/Card'
import { Link } from 'react-router-dom'
import { paths } from 'services/routes'

export const Profile = () => {
  return (
    <>
      <Heading> Profile </Heading>
      {/* <Heading> POP-OVER </Heading> */}
      <Button>
        <Link to={paths.login}> login</Link>
      </Button>
      <Button>
        <Link to={paths.register}> register</Link>
      </Button>

      <Divider />
      Loged?
      <ProfileCard />

      <Divider />
      <Button>
        <Link to={paths.subscription}> take action</Link>
      </Button>
      <Button>
        <Link to={paths.preferences}> edit profile</Link>
      </Button>

      <Divider />
      Loged?
      <Button>
        <Link to={paths.home}> signout</Link>
      </Button>

    </>
  )
}
