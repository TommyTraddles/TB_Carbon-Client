import { Heading, Text } from '@chakra-ui/react'
import { Card } from 'components/ui/Card'
import { BarChart, Bar, YAxis, CartesianGrid, Tooltip } from 'recharts'
// data
import { dataMonthlyAccumulatedByVertical } from 'assets/data/charts'

const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <>
        <Card p={2} variant="smooth">
          <Heading size="xs"> {payload[0].payload.date} </Heading>
          <Text fontSize="xs" fontWeight="bold" color={payload[0].color}>
            {payload[0].dataKey}: {payload[0].value}{' '}
          </Text>
        </Card>
      </>
    )
  }
  return null
}
export const BarSingle = () => {
  return (
    <>
      <BarChart
        width={350}
        height={100}
        margin={{ right: 30, left: -10 }}
        data={dataMonthlyAccumulatedByVertical}
      >
        {/* <XAxis
          dataKey="date"
          axisLine={false}
          tickLine={false}
          tickCount={5}
          tick={{ fontSize: 12, fill: '#A0AEC0' }}
        /> */}

        <YAxis
          axisLine={false}
          tickLine={false}
          tickCount={6}
          tick={{ fontSize: 12, fill: '#A0AEC0' }}
        />

        <CartesianGrid
          opacity={0.5}
          vertical={false}
          strokeDasharray="8"
          stroke="#A0AEC0"
        />
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey="transporte" stackId="a" fill="#8884d8" />
      </BarChart>
    </>
  )
}
