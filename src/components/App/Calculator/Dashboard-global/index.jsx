// components
import { Card } from 'components/ui/Card'
import { Heading, Button } from '@chakra-ui/react'

// https://recharts.org/en-US/examples/DashedLineChart
// https://www.chartjs.org/docs/latest/samples/bar/stacked.html

export const ResumeStatistics = () => {
  return (
    <>
      <Card bg="red.100">
        <Heading size="md"> Dashboard Global </Heading>
        <Button colorScheme="secondary"> Filtrar por fecha </Button>
      </Card>
    </>
  )
}
