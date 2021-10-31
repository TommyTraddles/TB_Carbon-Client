import { Heading, Button } from '@chakra-ui/react'
import { LeaderboardTable } from 'components/Leaderboard/Table'
// import { Link } from 'react-router-dom'

export const Leaderboard = () => {
  return (
    <>
      <Heading> Leaderboard </Heading>

      {/* <Heading> POP-OVER </Heading>
      <Button>
        <Link to="login"> login</Link>
      </Button>
      <Button>
        <Link to="login"> register</Link>
      </Button> */}

      <br />

      <Button colorScheme="secondary">Filter date</Button>
      <LeaderboardTable />
    </>
  )
}
