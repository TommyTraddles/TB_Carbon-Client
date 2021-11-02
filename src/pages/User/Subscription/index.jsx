import { Heading, Button } from '@chakra-ui/react'
import { PriceCard } from 'components/User/Subscription/Card'
import { BackButton } from 'components/ui/Button/Back'
// import { Success } from 'components/Subscription/Success'
// import { Error } from 'components/Subscription/Error'

export const Subscription = () => {
  return (
    <>
      <Heading> Subscription </Heading>
      <BackButton/>

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
