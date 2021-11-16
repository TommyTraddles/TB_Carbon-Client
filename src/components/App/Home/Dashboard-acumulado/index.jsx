// components
import { Card } from 'components/ui/Card'
import { Heading, Text, Button } from '@chakra-ui/react'
import { AreaStackSingle } from 'components/ui/Charts/Area-stack-single'

// https://recharts.org/en-US/examples/DashedLineChart
// https://www.chartjs.org/docs/latest/samples/bar/stacked.html

export const ResumeStatistics = () => {
  return (
    <>
      <Card p="3">
        <Text fontSize="lg" fontWeight="bold" mb="6px">
          Acumulado total
        </Text>
        <Text> Estas activo desde... </Text>
        <AreaStackSingle />
        <Button colorScheme='secondary'> Filtro de fecha </Button>
      </Card>
    </>
  )
}
