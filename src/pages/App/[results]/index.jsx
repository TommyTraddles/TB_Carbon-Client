// components
import { Heading } from '@chakra-ui/react'
import { Solutions } from 'components/App/Results/Solutions'
import { Statistics } from 'components/App/Results/Statistics'
import { BackButton } from 'components/ui/Button/Back'
// data
import { paths } from 'services/routes'

export const Results = () => {
  return (
    <>
      <BackButton to={paths.home} />
      <Heading> Results </Heading>
      <Statistics />
      <Solutions />
    </>
  )
}
