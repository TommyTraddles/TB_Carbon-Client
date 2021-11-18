// components
import { Card } from 'components/ui/Card'
import { StatCard } from 'components/ui/Charts/Stats'

// https://recharts.org/en-US/examples/DashedLineChart
// https://www.chartjs.org/docs/latest/samples/bar/stacked.html

export const ResumeStats = () => {
  return (
    <>
      <Card flexDirection='row'>
        <StatCard />
      </Card>
    </>
  )
}
