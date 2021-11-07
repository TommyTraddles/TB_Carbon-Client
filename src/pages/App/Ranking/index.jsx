// components
import { Heading } from '@chakra-ui/react'
import { RankingTable } from 'components/App/Ranking/Table-complete'
import { Card } from 'components/ui/Card'
// data
import { user } from 'assets/data'

export const Ranking = () => {
  return (
    <>
      <Heading> Ranking </Heading>
      {!user.logged ? (
        <Card bg='red.100'>
          <Heading color="red.500"> Login to compare </Heading>
        </Card>
      ) : (
        <RankingTable />
      )}
    </>
  )
}
