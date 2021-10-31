import { HStack } from '@chakra-ui/react'
import { Card } from 'components/Card'
import { NavLink } from 'react-router-dom'

import { routes } from 'services/routes'

export const DEMO_LINKS = () => {
  return (
    <>
      <Card bg='blue.100' mb={8}>
        <HStack>
          {routes.map((e, i) => (
            <NavLink to={e.path}> {e.path} </NavLink>
          ))}
        </HStack>
      </Card>
    </>
  )
}