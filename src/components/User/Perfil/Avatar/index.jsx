import { Text, Avatar, HStack} from '@chakra-ui/react'

export const PerfilCard = ({ name, user }) => {
  return(
    <>
    <HStack>
      <Avatar name={name} />
      <Text fontWeight='bold'> @{user ? user : name } </Text>
    </HStack>
    </>
  )
}