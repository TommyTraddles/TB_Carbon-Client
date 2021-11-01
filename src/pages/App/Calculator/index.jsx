// components
import { Heading, Button } from '@chakra-ui/react'
import { BackButton } from 'components/ui/Button/Back'
import { Form } from 'components/App/Calculator/Form'
// data
import { paths } from 'services/routes'
import { Link } from 'react-router-dom'

export const Calculator = () => {
  return (
    <>
      <Heading> Calculator new entry </Heading>
      <BackButton to={paths.home} />

      <Form />
      <Button>
        <Link to={paths.results}> see results</Link>
      </Button>
    </>
  )
}
