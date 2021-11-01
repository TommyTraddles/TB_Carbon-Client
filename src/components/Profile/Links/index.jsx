import { HStack, IconButton, Text } from '@chakra-ui/react'

export const UserLink = ({ icon, name, onClick }) => {
  return (
    <>
      <HStack w="100%" onClick={onClick ? onClick : ''}>
        <IconButton icon={icon} variant="ghost" colorScheme="gray" />
        <Text>{name}</Text>
      </HStack>
    </>
  )
}
