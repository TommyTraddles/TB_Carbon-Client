import { HStack, VStack, IconButton } from '@chakra-ui/react'
import { Card } from 'components/Card'
import { NavLink } from 'react-router-dom'
import { paths } from 'services/routes'

import {
  AiOutlineCalculator,
  AiOutlineHistory,
  AiOutlineTrophy,
  AiOutlineUser,
} from 'react-icons/ai'
import { BiHomeSmile } from 'react-icons/bi'

export const Navbar = () => {
  return (
    <>
      <Card
        position="fixed"
        maxW="sm"
        w="100%"
        h={16}
        bottom={1}
        bg="gray.700"
        py={3}
        px={8}
      >
        <HStack w="full" justifyContent="space-between">
          <VStack h={10}>
            <NavLink to={paths.home}>
              <IconButton variant="ghost" icon={<BiHomeSmile />} />
            </NavLink>
          </VStack>

          <NavLink to={paths.history}>
            <IconButton variant="ghost" icon={<AiOutlineHistory />} />
          </NavLink>

          <NavLink to={paths.calculator}>
            <IconButton variant="ghost" icon={<AiOutlineCalculator />} />
          </NavLink>

          <NavLink to={paths.leaderboard}>
            <IconButton variant="ghost" icon={<AiOutlineTrophy />} />
          </NavLink>

          <NavLink to={paths.profile}>
            <IconButton variant="ghost" icon={<AiOutlineUser />} />
          </NavLink>
        </HStack>
      </Card>
    </>
  )
}
