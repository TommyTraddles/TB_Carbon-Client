// components
import { Heading, Button } from '@chakra-ui/react'
import { ResumeStatistics } from 'components/App/Results/Statistics-short'
import { ResumeSolutions } from 'components/App/Results/Solutions-short'
// import { ResumeHistoryTable } from 'components/App/History/Table-short'
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

      <Button leftIcon={<RiStarSmileLine />}>
        <Link to={paths.subscription}> Take action </Link>
      </Button>

      <Heading my={4} size="md"> Daily Dashboard </Heading>
      <ResumeStatistics />

      <Heading my={4} size="md"> Solutions </Heading>
      <ResumeSolutions/>

      <Heading my={4} size="md"> New </Heading>
      <Button>
        <Link to={paths.calculator}> New entry</Link>
      </Button>

      {/* <Heading my={4} size="md"> History </Heading>
      <ResumeHistoryTable /> */}
    </>
  )
}
