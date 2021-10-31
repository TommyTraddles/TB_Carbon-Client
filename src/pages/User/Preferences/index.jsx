import { Heading } from '@chakra-ui/react'
import { paths } from 'services/routes'

import { BackButton } from 'components/Button/BackBtn'

export const Preferences = () => {
  return (
    <>
      <Heading> Preferences </Heading>
      <BackButton to={paths.profile} />

      <Heading size="md"> image </Heading>
      <Heading size="md"> username </Heading>
      <Heading size="md"> email </Heading>
      <Heading size="md"> password </Heading>
      <Heading size="md"> other info </Heading>
      <Heading size="md"> delete account </Heading>
    </>
  )
}
