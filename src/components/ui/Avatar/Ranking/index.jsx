import { Heading, Avatar, HStack} from '@chakra-ui/react'

export const RankingCard = ({ name }) => {

  return(
    <>
    <HStack>
      <Avatar size='md' name={name} />
      <Heading size='sm' > @{name} </Heading>
    </HStack>
    </>
  )
}