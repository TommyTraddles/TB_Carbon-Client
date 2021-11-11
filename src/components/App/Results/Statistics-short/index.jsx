// components
import { Card } from 'components/ui/Card'
import { Heading, Flex, Text, Box } from '@chakra-ui/react'
import { ChartTest1 } from 'components/ui/Charts/Line-1'
import { ChartTest2 } from 'components/ui/Charts/Line-2'
import { ChartTest3 } from 'components/ui/Charts/Line-3'
import { ChartTest4 } from 'components/ui/Charts/Line-4'
import { ChartTest5 } from 'components/ui/Charts/Line-5'
import { ChartTest6 } from 'components/ui/Charts/Line-6'

import { Progress } from '@chakra-ui/react'
// data
// import { Link } from 'react-router-dom'
// import { paths } from 'services/routes'

// https://recharts.org/en-US/examples/DashedLineChart
// https://www.chartjs.org/docs/latest/samples/bar/stacked.html

export const ResumeStatistics = () => {
  return (
    <>
      <Card>
        <Heading size="md"> Acumulado verticales </Heading>
        {/* <ChartTest4 /> */}
      </Card>

      <br />

      <Card>
        <Heading size="md"> Hisórico vertical </Heading>
        {/* <ChartTest6 /> */}
      </Card>

      <br />

      <Card>
        <Heading size="md"> Logros pendientes para llegar al objetivo </Heading>
        {/* <ChartTest3 /> */}
      </Card>

      <br />

      <Card pr={20}>
        <Flex direction="column" alignSelf="flex-start">
          <Text fontSize="lg" fontWeight="bold" mb="6px">
            Comparación con otro
          </Text>
          <Text fontSize="md" fontWeight="medium" color="gray.400">
            <Text as="span" color="green.400" fontWeight="bold">
              (+5%) más 
            </Text>
            en este mes
          </Text>
        </Flex>
        <ChartTest2 />
      </Card>

      <br />
      <Card bg="red.100">
        <Heading size="md"> Dashboard (reducido) </Heading>
        {/* <Button colorScheme="secondary"> Filtrar por fecha </Button>
        <Button>
          <Link to={paths.results}> Ver detalles </Link>
        </Button> */}
      </Card>


      <Heading size="md"> Acciones completadas </Heading>
      <Progress colorScheme="green" size="sm" value={50} />

      {/* <ChartTest5 /> */}


    </>
  )
}
