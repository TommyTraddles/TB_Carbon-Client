// components
import { Heading } from '@chakra-ui/react'
import { RankingTable } from 'components/App/Ranking/Table-complete'
import { RankingMap } from 'components/App/Ranking/Map'

export const Ranking = () => {
  return (
    <>
      <Heading> Ranking </Heading>
      <RankingMap />
      <br/>
      <RankingTable />
    </>
  )
}
