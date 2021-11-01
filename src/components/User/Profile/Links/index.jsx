import { HStack, IconButton, Text, Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export const UserLink = ({ icon, name, path }) => {
  return (
    <>
      <Box w="full">
        <Link to={path}>
          <HStack w="100%">
            <IconButton icon={icon} variant="ghost" colorScheme="gray" />
            <Text>{name}</Text>
          </HStack>
        </Link>
      </Box>
    </>
  )
}

export const UserModal = ({ icon, name, onClick }) => {
  return (
    <>
      <HStack w="100%" onClick={onClick} cursor='pointer'>
        <IconButton icon={icon} variant="ghost" colorScheme="gray" />
        <Text>{name}</Text>
      </HStack>
    </>
  )
}
