import { Heading, Button } from '@chakra-ui/react'
import { LeaderboardTable } from 'components/Leaderboard/Table'

export const Leaderboard = () => {
  return (
    <>
      <Heading> Leaderboard </Heading>
      <Button colorScheme="secondary">Filter date</Button>
      <LeaderboardTable />
    </>
  )
}
