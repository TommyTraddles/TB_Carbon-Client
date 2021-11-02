import { Card } from 'components/ui/Card'
import { Heading, Button } from '@chakra-ui/react'

export const LeaderboardTable = () => {
  return (
    <>
      <Card bg="red.100">
        <Heading size="md"> Complete Table </Heading>
        <Button colorScheme="secondary">Filter date</Button>
      </Card>
    </>
  )
}
