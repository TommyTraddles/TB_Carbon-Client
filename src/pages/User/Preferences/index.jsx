// components
import { Heading } from '@chakra-ui/react'
import { BackButton } from 'components/ui/Button/Back'
import { UserLink } from 'components/User/Profile/Links'
// data
import { paths } from 'services/routes'

export const Preferences = () => {
  return (
    <>
      <Heading> Preferences </Heading>
      <BackButton to={paths.profile} />

      <UserLink />
      <Heading size="md"> image </Heading>
      <Heading size="md"> username </Heading>
      <Heading size="md"> email </Heading>
      <Heading size="md"> password </Heading>
      <Heading size="md"> other info </Heading>
      <Heading size="md"> delete account </Heading>
    </>
  )
}
