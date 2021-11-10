// components
import { Heading, Button, HStack } from '@chakra-ui/react'
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
        <Button variant='link'>
          <Link to={paths.home}> Omitir </Link>
        </Button>

      <HStack my={2}>
        <Card bg='red.100' > 1 </Card>
        <Card bg='red.100' > 2 </Card>
        <Card bg='red.100' > 3 </Card>
      </HStack>
        <Button my={2} w="full" colorScheme='secondary'> Continuar </Button>
    </>
  )
}
