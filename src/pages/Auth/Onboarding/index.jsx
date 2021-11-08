// components
import { Heading, Button, HStack, VStack } from '@chakra-ui/react'
import { Card } from 'components/ui/Card'
// data
import { Link } from 'react-router-dom'
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

      <HStack my={2}>
        <Card bg='red.100' > 1 </Card>
        <Card bg='red.100' > 2 </Card>
        <Card bg='red.100' > 3 </Card>
      </HStack>

      <VStack>
        <Button my={2} w="full" >
          <Link to={paths.login}> Login </Link>
        </Button>
        <Button variant="outline" w="full" >
          <Link to={paths.register}> Registro</Link>
        </Button>
        <Button variant="ghost">
          <Link to={paths.home}> Continua sin iniciar sesión </Link>
        </Button>
      </VStack>
    </>
  )
}
