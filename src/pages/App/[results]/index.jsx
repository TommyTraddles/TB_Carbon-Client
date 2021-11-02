// components
import { Heading } from '@chakra-ui/react'
import { Solutions } from 'components/App/Results/Solutions'
import { Statistics } from 'components/App/Results/Statistics'
import { BackButton } from 'components/ui/Button/Back'

export const Results = () => {
  return (
    <>
      <BackButton/>
      <Heading> Results </Heading>
      <Statistics />
      <Solutions />
    </>
  )
}
