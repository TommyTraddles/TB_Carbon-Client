import { Center, Heading, Button, Input, Checkbox } from '@chakra-ui/react'
import { Card } from 'components/Card'

export const Home = () => {
  return (
    <>
      <Center p={8}>
        <Card w={96}>
          <Heading> Hello </Heading>
          <Checkbox> Hola </Checkbox>
          <Input placeholder="hello" />
          <Button> Hello </Button>
        </Card>
      </Center>
    </>
  )
}