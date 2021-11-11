// components
import { Heading, Text } from '@chakra-ui/layout'
import { Card } from 'components/ui/Card'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
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

export const AreaStackSingle = () => {
  return (
    <>
      <AreaChart
        data={dataMonthlyAccumulatedByVertical}
        margin={{ right: 30, left: -10 }}
        width={350}
        height={250}
      >
        <defs>
          <linearGradient id="colorelectricidad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="75%" stopColor="#8884d8" stopOpacity={0.05} />
          </linearGradient>
          <linearGradient id="colortransporte" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#83a6ed" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#83a6ed" stopOpacity={0.05} />
          </linearGradient>
          <linearGradient id="coloralimentación" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8dd1e1" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8dd1e1" stopOpacity={0.05} />
          </linearGradient>
          <linearGradient id="colorconsumo" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0.05} />
          </linearGradient>
        </defs>

        <Area
          dataKey="electricidad"
          stroke="#8884d8"
          strokeWidth={4}
          stackId='1'
          fill="url(#colorelectricidad)"
          type="monotone"
        />
        <Area
          dataKey="transporte"
          stackId='1'
          strokeWidth={4}
          stroke="#83a6ed"
          fill="url(#colortransporte)"
          type="monotone"
        />
        <Area
          dataKey="alimentación"
          stackId='1'
          strokeWidth={4}
          stroke="#8dd1e1"
          fill="url(#coloralimentación)"
          type="monotone"
        />
        <Area
          dataKey="consumo"
          stackId='1'
          strokeWidth={4}
          stroke="#82ca9d"
          fill="url(#colorconsumo)"
          type="monotone"
        />

        <XAxis
          dataKey="date"
          axisLine={false}
          tickLine={false}
          tickCount={5}
          tick={{ fontSize: 12, fill: '#A0AEC0' }}
        />

        <YAxis
          axisLine={false}
          tickLine={false}
          tickCount={6}
          tick={{ fontSize: 12, fill: '#A0AEC0' }}
        />

        <Tooltip content={<CustomTooltip />} />

        <CartesianGrid
          opacity={0.5}
          vertical={false}
          strokeDasharray="8"
          stroke="#A0AEC0"
        />
      </AreaChart>
    </>
  )
}
