import { Heading, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { Solutions } from 'components/Results/Solutions'
import { Statistics } from 'components/Results/Statistics'
import { paths } from 'services/routes'

export const Results = () => {
  return (
    <>
      <Button variant="outline">
        <Link to={paths.home}> back</Link>
      </Button>
      <Heading> Results </Heading>
      <Statistics />
      <Solutions />
    </>
  )
}
