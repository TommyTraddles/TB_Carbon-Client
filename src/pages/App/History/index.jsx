import { Heading, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { HistoryTable } from 'components/History/Table'

export const History = () => {
  return (
    <>
      <Heading> History </Heading>
      <Button colorScheme="secondary">Filter date</Button>
      <HistoryTable />
      <Button colorScheme="secondary">Pagination</Button>
      <Button>
        <Link to="/new/results"> see result </Link>
      </Button>
    </>
  )
}
