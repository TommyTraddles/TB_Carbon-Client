import { Heading, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { Form } from 'components/Calculator/Form'
import { paths } from 'services/routes'

export const Calculator = () => {
  return (
    <>
      <Heading> Calculator new entry </Heading>
      <Form />
      <Button>
        <Link to={paths.results}> see results</Link>
      </Button>
    </>
  )
}
