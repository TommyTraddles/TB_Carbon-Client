// components
import { NavbarButton } from 'components/Button/NavbarButton'
import { HStack } from '@chakra-ui/react'
import { Card } from 'components/Card'
// routes
import { navlinks } from 'services/routes'
// hooks
import { useColorModeValue } from '@chakra-ui/color-mode'

export const Navbar = () => {
  const bg = useColorModeValue('gray.50', 'gray.700')
  return (
    <>
      <Card
        bg={bg}
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
