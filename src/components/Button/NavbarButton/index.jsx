import { VStack, Button, Text } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

export const NavbarButton = ({ path, icon, name }) => {
  return (
    <>
      <NavLink to={path}>
        <Button variant={ path ? "ghost" : "ghost" } w={12} h={12}>
          <VStack>
            {icon}
            <Text fontSize="xs"> {name} </Text>
          </VStack>
        </Button>
      </NavLink>
    </>
  )
}
