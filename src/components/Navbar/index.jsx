import { HStack } from '@chakra-ui/react'
import { Card } from 'components/Card'

import { navlinks } from 'services/routes'

import { NavbarButton } from 'components/Button/NavbarButton'

export const Navbar = () => {
  return (
    <>
      <Card
        bg="gray.700"
        position="fixed"
        bottom={3}
        left={0}
        right={0}
        maxW="sm"
        h={16}
        py={2}
        m='auto'
      >
        <HStack justifyContent="space-between" w='full'>
          {navlinks.map((e) => (
            <NavbarButton
              key={e.name}
              name={e.name}
              icon={e.icon}
              path={e.path}
            />
          ))}
        </HStack>
      </Card>
    </>
  )
}
