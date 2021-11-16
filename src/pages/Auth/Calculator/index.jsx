// components
import { Heading, Text } from '@chakra-ui/react'
import { Modal } from 'components/ui/Modal'
import { RegisterTYP } from 'components/Auth/Register/TYP'
import { CalculadoraForm } from 'components/Auth/Calculator/Form'
// hooks
import { useDisclosure } from '@chakra-ui/hooks'
import { useEffect } from 'react'

export const Calculator = () => {
  // reminder
  const { isOpen: TYPiO, onOpen: TYPoO, onClose: TYPoC } = useDisclosure()

  useEffect(() => {
    TYPoO()
  }, [TYPoO])

  return (
    <>
      <Heading> Calcula tu huella </Heading>
      <Text> Serán 3 minutos </Text>

      <CalculadoraForm />

      <Modal
        isOpen={TYPiO}
        onClose={TYPoC}
        content={<RegisterTYP TYPoC={TYPoC} />}
      />
    </>
  )
}
