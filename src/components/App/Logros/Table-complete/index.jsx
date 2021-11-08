// components
import { Card } from 'components/ui/Card'
import { Heading, Button } from '@chakra-ui/react'
// data
import { Link } from 'react-router-dom'
import { paths } from 'services/routes'

export const LogrosTable = () => {
  return (
    <>
      <Card bg="red.100">
        <Heading size="md"> Tabla de histórico completa  </Heading>
        <Button colorScheme="secondary"> Paginación </Button>
        <Button colorScheme="secondary"> Badges </Button>
        <Button>
          <Link to={paths.results}> Ver detalle  </Link>
        </Button>
      </Card>
    </>
  )
}
