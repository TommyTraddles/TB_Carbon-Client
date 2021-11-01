// components
import { Heading, Button } from '@chakra-ui/react'
import { ResumeStatistics } from 'components/App/Home/Statistics'
import { HistoryTable } from 'components/App/History/Table'   
// data
import { Link } from 'react-router-dom'
import { paths } from 'services/routes'
// cons
import { RiStarSmileLine } from 'react-icons/ri'

export const Home = () => {
  const logged = false

  return (
    <>
      <Heading> Home </Heading>

      {logged ? (
        <Button leftIcon={<RiStarSmileLine />} variant="outline">
          Take action
        </Button>
      ) : (
        <Button leftIcon={<RiStarSmileLine />} variant="outline" isDisabled>
          Take action
        </Button>
      )}

      <Heading size="lg"> Strike </Heading>
      <Button colorScheme="secondary">Filter date</Button>
      <ResumeStatistics/>
      <Button>
        <Link to={paths.results}> See details</Link>
      </Button>
      <Heading size="lg"> New </Heading>
      <Button>
        <Link to={paths.calculator}> New entry</Link>
      </Button>
      <Heading size="lg"> History </Heading>
      <HistoryTable />
      <Button>
        <Link to={paths.history}> History</Link>
      </Button>
    </>
  )
}
