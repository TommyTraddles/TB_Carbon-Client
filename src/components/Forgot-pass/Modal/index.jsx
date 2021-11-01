import { Heading, Button, Input } from '@chakra-ui/react'
import { paths } from 'services/routes'

import { BackButton } from 'components/ui/Button/Back'

export const ForgotModal = () => {
  return (
    <>
      <BackButton to={paths.login} />

      <Heading> Forgot password </Heading>

      <form action="">
        <Input placeholder="email" />
        <Button type="submit"> Send </Button>
      </form>
    </>
  )
}
