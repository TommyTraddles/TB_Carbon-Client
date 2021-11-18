// components
import { Card } from 'components/ui/Card'
import { Heading, Text } from '@chakra-ui/react'
import { BarStack } from 'components/ui/Charts/Bar-stack'
import { BarSingle } from 'components/ui/Charts/Bar-single'
import { Progress } from '@chakra-ui/react'

export const Sandbox = () => {
  return (
    <>
      <Card px={3} py={5}>
        <Text fontSize="lg" fontWeight="bold" mb="6px">
          Histórico Verticales
        </Text>
        <BarStack />
      </Card>

      <br />

      <Card px={3} py={5}>
        <Text fontSize="md" fontWeight="bold" mb="6px">
          Histórico vertical
        </Text>
        <BarSingle />
      </Card>

      <br />

      <Heading size="md"> Acciones completadas </Heading>
      <Progress colorScheme="green" size="sm" value={50} />

      <br />
    </>
  )
}
