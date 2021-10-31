import { Heading, Button, Divider } from '@chakra-ui/react'
import { ProfileCard } from 'components/Profile/Card'
import { Link } from 'react-router-dom'
import { paths } from 'services/routes'

// hooks
import { useColorMode } from '@chakra-ui/color-mode'


export const Profile = () => {

  const { toggleColorMode } = useColorMode()

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

      <Button onClick={toggleColorMode} variant='outline' colorScheme='secondary'> Change mode </Button>

      <Divider />
      Loged?
      <Button>
        <Link to={paths.home}> signout</Link>
      </Button>

    </>
  )
}
