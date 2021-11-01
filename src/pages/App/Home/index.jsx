import { Heading, Button, Text } from '@chakra-ui/react'
import { ResumeStatistics } from 'components/Home/Statistics'
import { Link } from 'react-router-dom'
import { paths } from 'services/routes'

export const Home = () => {
  return (
    <>
      <Heading> Home </Heading>
      <Button colorScheme="secondary">Take action</Button>

      <Heading size='lg'> Strike </Heading>
      <Button colorScheme="secondary">Filter date</Button>
      <ResumeStatistics />
      <Button>
        <Link to={paths.results}> See details</Link>
      </Button>
      <Heading size='lg'> New </Heading>
      <Button>
        <Link to={paths.calculator}> New entry</Link>
      </Button>
      <Heading size='lg'> History </Heading>
      <Text>Login to access</Text>
      <Button>
        <Link to={paths.history}> History</Link>
      </Button>
      
      <br />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quo porro alias accusamus autem dicta quas minima ipsum ab at eaque error, asperiores amet consectetur optio itaque delectus. Repellat, ut.</p>
      <br />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quo porro alias accusamus autem dicta quas minima ipsum ab at eaque error, asperiores amet consectetur optio itaque delectus. Repellat, ut.</p>
      <br />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quo porro alias accusamus autem dicta quas minima ipsum ab at eaque error, asperiores amet consectetur optio itaque delectus. Repellat, ut.</p>
      <br />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quo porro alias accusamus autem dicta quas minima ipsum ab at eaque error, asperiores amet consectetur optio itaque delectus. Repellat, ut.</p>
      <br />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quo porro alias accusamus autem dicta quas minima ipsum ab at eaque error, asperiores amet consectetur optio itaque delectus. Repellat, ut.</p>
    </>
  )
}
