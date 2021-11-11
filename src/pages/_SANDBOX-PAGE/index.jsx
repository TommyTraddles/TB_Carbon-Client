// components
import { Card } from 'components/ui/Card'
import { Heading, Text } from '@chakra-ui/react'
import { AreaStackComp } from 'components/ui/Charts/Area-stack-comp'
import { AreaStackSingle } from 'components/ui/Charts/Area-stack-single'
import { RadialBar } from 'components/ui/Charts/RadialBar'
import { BarStack } from 'components/ui/Charts/Bar-stack'
import { BarSingle } from 'components/ui/Charts/Bar-single'
import { StatCard } from 'components/ui/Charts/Stats'
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

      <Card p="3">
        <Text fontSize="lg" fontWeight="bold" mb="6px">
          Acumulado mensual
        </Text>
        <AreaStackSingle />
      </Card>

      <br />

      <Card px={3} py={5}>
        <Text fontSize="md" fontWeight="bold" mb="6px">
          Histórico vertical
        </Text>
        <BarSingle />
      </Card>

      <br />

      <Card p="3">
        <Text fontSize="lg" fontWeight="bold" mb="6px">
          Card
        </Text>
        <StatCard />
      </Card>

      <br />

      <Card p="3">
        <Text fontSize="lg" fontWeight="bold" mb="6px">
          Logros
        </Text>
        <RadialBar />
      </Card>

      <br />

      <Card p="3">
        <Text fontSize="lg" fontWeight="bold" mb="6px">
          Comparativa
        </Text>
        <AreaStackComp />
      </Card>

      <br />

      <Heading size="md"> Acciones completadas </Heading>
      <Progress colorScheme="green" size="sm" value={50} />

      <br />
    </>
  )
}
