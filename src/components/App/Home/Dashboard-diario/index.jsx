// components
import { Card } from 'components/ui/Card'
import { Text } from '@chakra-ui/react'
import { RadialBar } from 'components/ui/Charts/RadialBar'

export const ResumeSolutions = () => {
  return (
    <>
      <Card p="3">
        <Text fontSize="lg" fontWeight="bold" mb="6px">
          Logros
        </Text>
        <RadialBar />
      </Card>
    </>
  )
}
