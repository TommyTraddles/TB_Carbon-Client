import { Heading, Text } from '@chakra-ui/layout'
import { Card } from 'components/ui/Card'
import {
  BarChart,
  Bar,
  // XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts'
// data
import { dataMonthlyAccumulatedByVertical } from 'assets/data/charts'

const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <>
        <Card p={2} variant='smooth'>
          <Heading size="xs"> {payload[0].payload.date} </Heading>
          {payload.map((e,i) => 
            <Text key={i} fontSize="xs" fontWeight='bold' color={e.color}>{e.dataKey}: {e.value} </Text> )}
        </Card>
      </>
    )
  }
  return null
}
export const BarStack = () => {
  return (
    <>
      <BarChart
        data={dataMonthlyAccumulatedByVertical}
        width={350}
        height={200}
        margin={{ right: 30, left: -10 }}
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
        <Tooltip content={<CustomTooltip/>}/>
        <Bar dataKey="transporte" stackId="a" fill="#8884d8" />
        <Bar dataKey="electricidad" stackId="a" fill="#83a6ed" />
        <Bar dataKey="alimentación" stackId="a" fill="#8dd1e1" />
        <Bar dataKey="consumo" stackId="a" fill="#82ca9d" />
      </BarChart>
    </>
  )
}
