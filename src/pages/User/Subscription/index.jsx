import { Heading, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { PriceCard } from 'components/Subscription/Card'
import { Success } from 'components/Subscription/Success'
import { Error } from 'components/Subscription/Error'

export const Subscription = () => {
  return (
    <>
      <Heading> Subscription </Heading>
      <Button>
        <Link to="/me"> Back</Link>
      </Button>

      <PriceCard />
      <Button> Buy</Button>

      <Heading> POP-OVER </Heading>
      <Success />
      <Error />
    </>
  )
}
