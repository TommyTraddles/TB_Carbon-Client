import { Wrap, Button } from '@chakra-ui/react'
import { Card } from 'components/Card'
import { NavLink } from 'react-router-dom'

import { routes } from 'services/routes'

export const DEMO_LINKS = () => {
  return (
    <>
      <Card bg="gray.800" mb={8}>
        <Wrap spacing={4}>
          {routes.map((e, i) => (
            <Button variant="outline">
              <NavLink to={e.path}> {e.path} </NavLink>
            </Button>
          ))}
        </Wrap>
      </Card>
    </>
  )
}
