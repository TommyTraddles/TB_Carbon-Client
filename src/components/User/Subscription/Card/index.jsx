import { Text } from '@chakra-ui/react'
import { Card } from 'components/ui/Card'

export const PriceCard = ({ content }) => {
  return(
    <>
    <Card bg='red.100'>
      <Text>{ content }</Text> 
    </Card>
    </>
  )
}