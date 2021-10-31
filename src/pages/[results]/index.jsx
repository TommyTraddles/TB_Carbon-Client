import { Heading, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { Solutions } from 'components/Results/Solutions'
import { Statistics } from 'components/Results/Statistics'

export const Results = () => {
  return (
    <>
      <Button variant="outline">
        <Link to="/home"> back</Link>
      </Button>
      <Heading> Results </Heading>
      <Statistics />
      <Solutions />
    </>
  )
}
