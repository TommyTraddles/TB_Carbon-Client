import { Text, Avatar, HStack, Badge } from '@chakra-ui/react'

export const PerfilCard = ({ name, user, plan }) => {
  return(
    <>
    <HStack>
      <Avatar name={name} />
      <Text fontWeight='bold'> @{user} </Text>
      { plan !== 'free' && <Badge colorScheme='red'> PRO </Badge>}
    </HStack>
    </>
  )
}