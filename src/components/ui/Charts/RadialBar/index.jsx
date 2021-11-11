import { Text } from '@chakra-ui/react'
import { Card } from 'components/ui/Card'
import { RadialBarChart, RadialBar as RadBar, Tooltip } from 'recharts'
// data
import { dataLogroPuntajeAcumulado } from 'assets/data/charts'

const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <>
        <Card p={2} variant='smooth'>
          <Text fontSize="xs" fontWeight='bold' color={payload[0].payload.fill} >{payload[0].payload.name} </Text>
          <Text fontSize="xs"> {payload[0].value} </Text>
        </Card>
      </>
    )
  }
  return null
}

export const RadialBar = () => {
  return (
    <>
      <RadialBarChart
        innerRadius="10%"
        outerRadius="100%"
        data={dataLogroPuntajeAcumulado}
        startAngle={180}
        endAngle={0}
        width={200}
        height={200}
        margin={{
          bottom: '0',
        }}
      >
        <RadBar background dataKey="score" />
        <Tooltip content={<CustomTooltip />} />
      </RadialBarChart>
    </>
  )
}
