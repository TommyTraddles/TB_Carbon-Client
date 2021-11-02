// components
import { Card } from 'components/ui/Card'
import { Heading, Button } from '@chakra-ui/react'
// data
import { Link } from 'react-router-dom'
import { paths } from 'services/routes'

export const Form = () => {
  return (
    <>
      <Card bg="red.100">
        <Heading size="md"> Complete form </Heading>
        <Button>
          <Link to={paths.results}> see results</Link>
        </Button>
      </Card>
    </>
  )
}
