// components
import { Card } from 'components/ui/Card'
import { Text } from '@chakra-ui/react'
import { StatCard } from 'components/ui/Charts/Stats'

// https://recharts.org/en-US/examples/DashedLineChart
// https://www.chartjs.org/docs/latest/samples/bar/stacked.html

export const ResumeStats = () => {
  return (
    <>
      <Card p="3">
        <Text fontSize="lg" fontWeight="bold" mb="6px">
          Card
        </Text>
        <StatCard />
      </Card>
    </>
  )
}
