import { Heading, Button, HStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { Card } from 'components/Card'
import { paths } from 'services/routes'

export const Onboarding = () => {
  return (
    <>
      <Heading> Onboarding </Heading>

      {/* 🔥 */}
      <HStack>
        <Card> 1 </Card>
        <Card> 2 </Card>
        <Card> 3 </Card>
      </HStack>

      <Button>
        <Link to={paths.login}> Login </Link>
      </Button>
      <Button variant="outline">
        <Link to={paths.register}> register</Link>
      </Button>
      <Button variant="ghost">
        <Link to={paths.home}> continue without login </Link>
      </Button>
    </>
  )
}
