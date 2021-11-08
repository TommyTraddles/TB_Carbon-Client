// components
import { Heading } from '@chakra-ui/react'
import { LogrosTable } from 'components/App/Logros/Table-complete'
import { Card } from 'components/ui/Card'
// data
import { user } from 'assets/data'

export const Logros = () => {
  return (
    <>
      <Heading> Logros </Heading>

      {!user.logged ? (
        <Card bg='red.100'>
          <Heading color="red.500"> Login to see logros </Heading>
        </Card>
      ) : (
        <LogrosTable />
      )}
    </>
  )
}
