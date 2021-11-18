import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  HStack,
} from '@chakra-ui/react'

export const StatCard = () => {
  return (
    <>
      <HStack justifyContent="space-between" w="full">
        <Stat>
          <StatLabel>Sent</StatLabel>
          <StatNumber>345,670</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            23.36%
          </StatHelpText>
        </Stat>

        <Stat>
          <HStack>
            <StatLabel>Clicked</StatLabel>
          </HStack>
          <StatNumber>45</StatNumber>
          <StatHelpText>
            <StatArrow type="decrease" />
            9.05%
          </StatHelpText>
        </Stat>
      </HStack>
    </>
  )
}
