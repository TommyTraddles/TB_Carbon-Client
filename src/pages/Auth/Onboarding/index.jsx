import { Heading, Button, HStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { Card } from 'components/Card'

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
        <Link to="/login"> Login </Link>
      </Button>
      <Button variant="outline">
        <Link to="/register"> register</Link>
      </Button>
      <Button variant="ghost">
        <Link to="/"> continue without login </Link>
      </Button>
    </>
  )
}
