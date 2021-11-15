// components
import { Heading, Button } from '@chakra-ui/react'
import { Modal } from 'components/ui/Modal'
import { RegisterTYP } from 'components/Auth/Register/TYP'
import { CalculadoraForm } from 'components/Auth/Calculator/Form'
// data
import { Link } from 'react-router-dom'
import { paths } from 'services/routes'
// hooks
import { useDisclosure } from '@chakra-ui/hooks'
import { useEffect } from 'react'

export const Calculator = () => {
  // reminder
  const { isOpen: TYPiO, onOpen: TYPoO, onClose: TYPoC } = useDisclosure()

  useEffect(() => {
    // TYPoO()
  }, [TYPoO])

  return (
    <>
      <Heading> Bienvenido </Heading>

      <CalculadoraForm />

      <Link to={paths.home}>
        <Button size="lg"> Ver mi resultado </Button>
      </Link>

      <Modal
        isOpen={TYPiO}
        onClose={TYPoC}
        content={<RegisterTYP TYPoC={TYPoC} />}
      />
    </>
  )
}
