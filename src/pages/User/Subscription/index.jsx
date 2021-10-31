import { Heading, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { PriceCard } from 'components/Subscription/Card'
import { paths } from 'services/routes'
// import { Success } from 'components/Subscription/Success'
// import { Error } from 'components/Subscription/Error'

export const Subscription = () => {
  return (
    <>
      <Heading> Subscription </Heading>

      <Button>
        <Link to={paths.profile}> Back</Link>
      </Button>

      {/* <Heading> POP-OVER </Heading>
      <Button>
        <Link to="login"> login</Link>
      </Button>
      <Button>
        <Link to="login"> register</Link>
      </Button> */}

      <PriceCard />
      <br/>
      <PriceCard />
      <Button> Buy</Button>

      {/* <Heading> POP-OVER </Heading>
      <Success />
      <Error /> */}
    </>
  )
}
