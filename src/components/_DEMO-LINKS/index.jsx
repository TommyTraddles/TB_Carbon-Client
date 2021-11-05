import { Wrap, Button, Badge, Text } from '@chakra-ui/react'
import { Card } from 'components/ui/Card'
// data
import { NavLink } from 'react-router-dom'
import { routes } from 'services/routes'
import { user } from 'assets/data'

export const DEMO_LINKS = () => {
  return (
    <>
      <Card bg="blue.800" mb={8}>
        <Wrap spacing={4}>
          {routes.map((e, i) => (
            <Button key={i} variant="outline" size="xs">
              <NavLink to={e.path}> {e.path} </NavLink>
            </Button>
          ))}
        </Wrap>

        <br />

        <Text fontSize="sm" color="white">
          Logged: 
          {user.logged ? (
            <Badge colorScheme="green"> IN </Badge>
          ) : (
            <Badge colorScheme="red"> OUT </Badge>
          )}
        </Text>
      </Card>
    </>
  )
}
