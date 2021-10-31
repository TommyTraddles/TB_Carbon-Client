// components
import { Heading } from '@chakra-ui/react'
import { Solutions } from 'components/Results/Solutions'
import { Statistics } from 'components/Results/Statistics'
import { BackButton } from 'components/Button/BackBtn'
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
