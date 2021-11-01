import { Text, Avatar, HStack, Badge } from '@chakra-ui/react'

export const ProfileCard = () => {
  return(
    <>
    <HStack>
      <Avatar name='Tommy Traddles' />
      <Text fontWeight='bold'> @ConcernedCitizen </Text>
      <Badge colorScheme='red'> PRO </Badge>
    </HStack>
    </>
  )
}