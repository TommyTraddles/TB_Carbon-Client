import { HStack, Button } from '@chakra-ui/react'
import { Card } from 'components/Card'
import { NavLink } from 'react-router-dom'
import { paths } from 'services/routes'

export const Navbar = () => {
  return (
    <>
      <Card
      // pos="absolute"
      // bottom="0"
      // left="0"
      // rigth='0'
      >
        <HStack>
          <Button variant='ghost'>
            <NavLink to={paths.home}> home </NavLink>
          </Button>

          <Button variant='ghost'>
            <NavLink to={paths.calculator}> new </NavLink>
          </Button>

          <Button variant='ghost'>
            <NavLink to={paths.history}> history </NavLink>
          </Button>

          <Button variant='ghost'>
            <NavLink to={paths.leaderboard}> leaderboard </NavLink>
          </Button>
          
          <Button variant='ghost'>
            <NavLink to={paths.profile}> me </NavLink>
          </Button>
        </HStack>
      </Card>
    </>
  )
}
