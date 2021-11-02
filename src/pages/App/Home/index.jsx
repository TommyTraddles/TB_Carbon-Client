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
  // const logged = false

  return (
    <>
      <Heading> Home </Heading>

      <Button leftIcon={<RiStarSmileLine />} variant="outline">
        <Link to={paths.subscription}> Take action </Link>
      </Button>

      <Heading size="md"> Strike </Heading>
      <ResumeStatistics />

      <Heading size="md"> New </Heading>
      <Button>
        <Link to={paths.calculator}> New entry</Link>
      </Button>

      <Heading size="md"> History </Heading>
      <HistoryTable />
    </>
  )
}
