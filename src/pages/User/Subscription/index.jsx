import { Heading, Button, Stack } from '@chakra-ui/react'
import { PriceCard } from 'components/User/Subscription/Card'
import { BackButton } from 'components/ui/Button/Back'
// import { Success } from 'components/Subscription/Success'
// import { Error } from 'components/Subscription/Error'

export const Subscription = () => {
  return (
    <>
      <Heading> Subscription </Heading>
      <BackButton />

      <Stack w='full' spacing={3}>
        <PriceCard content="free" />
        <PriceCard content="one-time" />
        <PriceCard content="subscripton" />
        <Button w="full"> Buy</Button>
      </Stack>

      {/* <Heading> POP-OVER </Heading>
      <Success />
      <Error /> */}
    </>
  )
}
