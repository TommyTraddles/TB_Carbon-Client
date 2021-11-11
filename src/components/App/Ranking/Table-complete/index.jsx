// componentes
import { Card } from 'components/ui/Card'
import { Button } from '@chakra-ui/react'
import { Table, Thead, Th, Tbody, Tr, Td } from '@chakra-ui/react'

export const RankingTable = () => {
  return (
    <>
      <Button colorScheme="secondary"> Buscar (d/w/m) </Button>
      <Button colorScheme="secondary"> Buscar Zipcode </Button>
      <Button colorScheme="secondary"> Buscar username </Button>

      <Card>
        <Table>
          <Thead>
            <Tr>
              <Th>Ranking</Th>
              <Th>Nombre</Th>
              <Th>CP</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>1</Td>
              <Td>Nombre</Td>
              <Td>28000</Td>
            </Tr>
            <Tr>
              <Td>1</Td>
              <Td>Nombre</Td>
              <Td>28000</Td>
            </Tr>
            <Tr>
              <Td>1</Td>
              <Td>Nombre</Td>
              <Td>28000</Td>
            </Tr>
            <Tr>
              <Td>1</Td>
              <Td>Nombre</Td>
              <Td>28000</Td>
            </Tr>
          </Tbody>
        </Table>
      </Card>
    </>
  )
}
