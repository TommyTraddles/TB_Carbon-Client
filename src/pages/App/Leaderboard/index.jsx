// components
import { Heading } from '@chakra-ui/react'
import { LeaderboardTable } from 'components/App/Leaderboard/Table-complete'
import { Card } from 'components/ui/Card'
// data
import { user } from 'assets/data'

export const Leaderboard = () => {
  return (
    <>
      <Heading> Leaderboard </Heading>
      {!user.logged ? (
        <Card>
          <Heading color="red.500"> Login to compare </Heading>
        </Card>
      ) : (
        <LeaderboardTable />
      )}
    </>
  )
}
