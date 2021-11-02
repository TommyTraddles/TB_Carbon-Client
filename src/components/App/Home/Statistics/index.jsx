// components
import { Card } from 'components/ui/Card'
import { Heading, Button } from '@chakra-ui/react'
// data
import { Link } from 'react-router-dom'
import { paths } from 'services/routes'

export const ResumeStatistics = () => {
  return (
    <>
      <Card bg="red.100">
        <Heading size="md"> Short Statistics </Heading>
        <Button colorScheme="secondary">Filter date</Button>
        <Button>
          <Link to={paths.results}> See details</Link>
        </Button>
      </Card>
    </>
  )
}
