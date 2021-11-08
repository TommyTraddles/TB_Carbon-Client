// components
import { Card } from 'components/ui/Card'
import { Heading, Button } from '@chakra-ui/react'
// data
import { Link } from 'react-router-dom'
import { paths } from 'services/routes'

export const LogrosTable = () => {
  return (
    <>
      <Card bg="red.100">
        <Heading size="md"> Complete Table </Heading>
        <Button colorScheme="secondary">Filter date</Button>
        <Button colorScheme="secondary">Pagination</Button>
        <Button colorScheme="secondary">Cambiar vista</Button>
        <Button>
          <Link to={paths.results}> see result </Link>
        </Button>
      </Card>
    </>
  )
}
