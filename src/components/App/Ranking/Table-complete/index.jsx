import { Card } from 'components/ui/Card'
import { Heading, Button } from '@chakra-ui/react'

export const RankingTable = () => {
  return (
    <>
      <Card bg="red.100">
        <Heading size="md"> Tabla completa de Ranking </Heading>
        <Button colorScheme="secondary"> Filtrar por fecha </Button>
        <Button colorScheme="secondary">Cambiar vista</Button>
      </Card>
    </>
  )
}