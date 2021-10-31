import { HStack } from '@chakra-ui/react'
import { Card } from 'components/Card'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
      <Card>
        <HStack justifyContent='space-between'>
          <NavLink to="/"> home </NavLink>
          <NavLink to="/new"> new </NavLink>
          <NavLink to="/history"> history </NavLink>
          <NavLink to="/leaderboard"> leaderboard </NavLink>
          <NavLink to="/me"> me </NavLink>
        </HStack>
      </Card>
    </>
  )
}
