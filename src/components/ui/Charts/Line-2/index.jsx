import { Heading, Text } from '@chakra-ui/layout'
import { Card } from 'components/ui/Card'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const data = [
  {
    date: 'jan',
    me: 400,
    compared_user: 240,
  },
  {
    date: 'Feb',
    me: 300,
    compared_user: 139,
  },
  {
    date: 'Mar',
    me: 200,
    compared_user: 980,
  },
  {
    date: 'Apr',
    me: 278,
    compared_user: 390,
  },
  {
    date: 'May',
    me: 189,
    compared_user: 480,
  },
]

const CustomTooltip = ({ active, payload, label }) => {
  console.info(payload)
  if (active) {
    return (
      <>
        <Card p={2}>
          <Heading size="xs"> {label} </Heading>
          <Text fontSize="xs"> You: {payload[0].value} </Text>
          <Text fontSize="xs"> Other: {payload[1].value} </Text>
        </Card>
      </>
    )
  }
  return null
}

export const ChartTest2 = () => {
  return (
    <>
      <ResponsiveContainer width={350} height={200}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorme" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2D3748" stopOpacity={0.8} />
              <stop offset="75%" stopColor="#2D3748" stopOpacity={0.05} />
            </linearGradient>
            <linearGradient id="compared_user" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4fd1c5" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#4fd1c5" stopOpacity={0.05} />
            </linearGradient>
          </defs>

          <Area
            dataKey="me"
            strokeWidth={4}
            stroke="#2D3748"
            fill="url(#colorme)"
            type="monotone"
          />
          <Area
            dataKey="compared_user"
            strokeWidth={4}
            stroke="#4fd1c5"
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

          <Tooltip content={<CustomTooltip />} />

          <CartesianGrid
            opacity={0.5}
            vertical={false}
            strokeDasharray="8"
            stroke="#A0AEC0"
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  )
}
