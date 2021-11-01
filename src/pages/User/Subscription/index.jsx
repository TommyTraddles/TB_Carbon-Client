import { Heading, Button } from '@chakra-ui/react'
import { PriceCard } from 'components/Subscription/Card'
import { BackButton } from 'components/ui/Button/Back'
// import { Success } from 'components/Subscription/Success'
// import { Error } from 'components/Subscription/Error'
// data
import { paths } from 'services/routes'

export const Subscription = () => {
  return (
    <>
      <Heading> Subscription </Heading>
      <BackButton to={paths.profile} />

      {/* <Heading> POP-OVER </Heading>
      <Button>
        <Link to="login"> login</Link>
      </Button>
      <Button>
        <Link to="login"> register</Link>
      </Button> */}

      <PriceCard />
      <br />
      <PriceCard />
      <Button> Buy</Button>

      {/* <Heading> POP-OVER </Heading>
      <Success />
      <Error /> */}
    </>
  )
}
