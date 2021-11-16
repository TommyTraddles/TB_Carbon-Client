// components
import { Heading, Text } from '@chakra-ui/layout'
import { Card } from 'components/ui/Card'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'


const CustomTooltip = ({ active, payload, label, me, other }) => {
  if (active) {
    return (
      <>
        <Card p={2} variant='smooth'>
          <Heading size="xs"> {label} </Heading>
          <Text fontSize="xs" fontWeight='bold' color={payload[0].color}> {me}: {payload[0].value} </Text>
          <Text fontSize="xs" fontWeight='bold' color={payload[1].color}> {other}: {payload[1].value} </Text>
        </Card>
      </>
    )
  }
  return null
}

export const AreaStackComp = ({ data, me, other }) => {
  return (
    <>
      <AreaChart
        data={data}
        margin={{ right: 30, left: -10 }}
        width={350}
        height={250}
      >
        <defs>
          <linearGradient id="colorme" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="75%" stopColor="#8884d8" stopOpacity={0.05} />
          </linearGradient>
          <linearGradient id="compared_user" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8dd1e1" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8dd1e1" stopOpacity={0.05} />
          </linearGradient>
        </defs>

        <Area
          dataKey="me"
          strokeWidth={4}
          stroke="#8884d8"
          fill="url(#colorme)"
          type="monotone"
        />
        <Area
          dataKey="compared_user"
          strokeWidth={4}
          stroke="#8dd1e1"
          fill="url(#compared_user)"
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

        <Tooltip content={<CustomTooltip me={me} other={other}/>} />

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
