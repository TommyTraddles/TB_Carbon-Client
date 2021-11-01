import { Heading, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { Form } from 'components/Calculator/Form'
import { paths } from 'services/routes'
import { BackButton } from 'components/ui/Button/Back'

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
