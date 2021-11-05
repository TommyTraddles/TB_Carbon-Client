import { Text, Avatar, HStack, Badge } from '@chakra-ui/react'

export const ProfileCard = ({ name, user, pro }) => {
  return(
    <>
    <HStack>
      <Avatar name='Juan El Profesional' />
      <Text fontWeight='bold'> @ConcernedCitizen </Text>
      { pro && <Badge colorScheme='red'> PRO </Badge>}
    </HStack>
    </>
  )
}