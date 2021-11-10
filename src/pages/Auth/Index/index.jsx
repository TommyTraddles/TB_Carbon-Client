// components
import { VStack, Button } from '@chakra-ui/react'
import { Modal } from 'components/ui/Modal'
import { LoginModal } from 'components/Auth/Login/Modal'
import { RegisterModal } from 'components/Auth/Register/Modal'
// hooks
import { useDisclosure } from '@chakra-ui/hooks'

export const Index = () => {
  const { isOpen: LiO, onOpen: LoO, onClose: LoC } = useDisclosure()
  const { isOpen: RiO, onOpen: RoO, onClose: RoC } = useDisclosure()

  return (
    <>

    <VStack>
    <Button onClick={LoO} my={2} w="full"> Login </Button>
    <Modal isOpen={LiO} onClose={LoC} content={<LoginModal LoC={LoC} RoO={RoO}/>} />

    <Button onClick={RoO} my={2} w="full" variant='outline'> Registro </Button>
    <Modal isOpen={RiO} onClose={RoC} content={<RegisterModal RoC={RoC} LoO={LoO} />} />
    </VStack>
    </>
  )
}
