import { Heading, Avatar, HStack} from '@chakra-ui/react'

export const RankingCard = ({ name }) => {

  return(
    <>
    <HStack>
      <Avatar size='md' name={name.props.cell.value} />
      <Heading size='sm' > @{name.props.cell.value} </Heading>
    </HStack>
    </>
  )
}