import { Heading, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { HistoryTable } from 'components/History/Table'

export const History = () => {
  return (
    <>
      <Heading> History </Heading>
      Filters
      <br />
      <HistoryTable />
      <br />
      <Button>
        <Link to="/new/results"> see result </Link>
      </Button>
    </>
  )
}
