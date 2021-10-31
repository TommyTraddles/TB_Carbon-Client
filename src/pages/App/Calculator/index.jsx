import { Heading, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { Form } from 'components/Calculator/Form'

export const Calculator = () => {
  return (
    <>
      <Heading> Calculator new entry </Heading>
      <Form />
      <Button>
        <Link to="/new/results"> see results</Link>
      </Button>
    </>
  )
}
