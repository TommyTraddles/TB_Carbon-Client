// components
import { Card } from 'components/ui/Card'
import { Heading, Button } from '@chakra-ui/react'
// data
import { Link } from 'react-router-dom'
import { paths } from 'services/routes'

export const ResumeLogrosTable = () => {
  return (
    <>
      <Card bg="red.100">
        <Heading size="md"> Short Table </Heading>
        <Button>
          <Link to={paths.logros}> Logros </Link>
        </Button>
      </Card>
    </>
  )
}
