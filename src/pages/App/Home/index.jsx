import { Heading, Button } from '@chakra-ui/react'
import { ResumeStatistics } from 'components/Home/Statistics'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <>
      <Heading> Home </Heading>
      <Button colorScheme="secondary">Take action</Button>

      <Heading size='lg'> Strike </Heading>
      <Button colorScheme="secondary">Filter date</Button>
      <ResumeStatistics />
      <Button>
        <Link to="/new/results"> See details</Link>
      </Button>
      <Heading size='lg'> New </Heading>
      <Button>
        <Link to="/new"> New entry</Link>
      </Button>
      <Heading size='lg'> History </Heading>
      <Button>
        <Link to="/history"> History</Link>
      </Button>
    </>
  )
}
