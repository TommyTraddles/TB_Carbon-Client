import { Heading, Button, HStack, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { Card } from 'components/ui/Card'
import { paths } from 'services/routes'
// hooks
import { useEffect } from 'react'

export const Onboarding = () => {
  useEffect(() => {
    document.title = 'Carbon | Onboard'
  }, [])

  return (
    <>
      <Heading> Onboarding </Heading>

      <HStack>
        <Card> 1 </Card>
        <Card> 2 </Card>
        <Card> 3 </Card>
      </HStack>

      <VStack>
        <Button>
          <Link to={paths.login}> Login </Link>
        </Button>
        <Button variant="outline">
          <Link to={paths.register}> register</Link>
        </Button>
        <Button variant="ghost">
          <Link to={paths.home}> continue without login </Link>
        </Button>
      </VStack>
    </>
  )
}
