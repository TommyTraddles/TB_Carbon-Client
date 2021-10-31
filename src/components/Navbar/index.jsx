import { HStack, Button } from '@chakra-ui/react'
import { Card } from 'components/Card'
import { NavLink } from 'react-router-dom'
import { paths } from 'services/routes'

export const Navbar = () => {
  return (
    <>
      <Card
      // position="fixed" maxW="sm" w="100%" h={20} bottom={1} bg="red.900"
      >
        <HStack>
          <Button variant="ghost">
            <NavLink to={paths.home}> home </NavLink>
          </Button>

          <Button variant="ghost">
            <NavLink to={paths.calculator}> new </NavLink>
          </Button>

          <Button variant="ghost">
            <NavLink to={paths.history}> history </NavLink>
          </Button>

          <Button variant="ghost">
            <NavLink to={paths.leaderboard}> leaderboard </NavLink>
          </Button>

          <Button variant="ghost">
            <NavLink to={paths.profile}> me </NavLink>
          </Button>
        </HStack>
      </Card>
    </>
  )
}
