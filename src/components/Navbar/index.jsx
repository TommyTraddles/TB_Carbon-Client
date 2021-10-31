import { HStack, IconButton } from '@chakra-ui/react'
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
          <IconButton>
            <NavLink to={paths.home}> home </NavLink>
          </IconButton>

          <IconButton>
            <NavLink to={paths.calculator}> new </NavLink>
          </IconButton>

          <IconButton>
            <NavLink to={paths.history}> history </NavLink>
          </IconButton>

          <IconButton>
            <NavLink to={paths.leaderboard}> leaderboard </NavLink>
          </IconButton>
          
          <IconButton>
            <NavLink to={paths.profile}> me </NavLink>
          </IconButton>
        </HStack>
      </Card>
    </>
  )
}
