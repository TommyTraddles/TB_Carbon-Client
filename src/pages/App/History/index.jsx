// components
import { Heading } from '@chakra-ui/react'
import { HistoryTable } from 'components/App/History/Table-complete'
import { Card } from 'components/ui/Card'
// data
import { user } from 'assets/data'

export const History = () => {
  return (
    <>
      <Heading> History </Heading>

      {!user.logged ? (
        <Card bg='red.100'>
          <Heading color="red.500"> Login to see history </Heading>
        </Card>
      ) : (
        <HistoryTable />
      )}
    </>
  )
}
