// components
import { Heading, Button } from '@chakra-ui/react'
import { HistoryTable } from 'components/App/History/Table'
import { BackButton } from 'components/ui/Button/Back'
// data
import { Link } from 'react-router-dom'
import { paths } from 'services/routes'

export const History = () => {
  return (
    <>
      <Heading> History </Heading>
      <BackButton to={paths.home} />
      <Button colorScheme="secondary">Filter date</Button>
      <HistoryTable />
      <Button colorScheme="secondary">Pagination</Button>
      <Button>
        <Link to={paths.results}> see result </Link>
      </Button>
    </>
  )
}
