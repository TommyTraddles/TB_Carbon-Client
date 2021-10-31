import { Heading, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { HistoryTable } from 'components/History/Table'
import { paths } from 'services/routes'

export const History = () => {
  return (
    <>
      <Heading> History </Heading>
      <Button colorScheme="secondary">Filter date</Button>
      <HistoryTable />
      <Button colorScheme="secondary">Pagination</Button>
      <Button>
        <Link to={paths.results}> see result </Link>
      </Button>
    </>
  )
}