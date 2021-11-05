// components
import { LoginForm, } from 'components/Auth/Login/Form'
import { Button, Text } from '@chakra-ui/react'
// import { RegisterForm } from 'components/Auth/Register/Form'
// import { Modal } from '@chakra-ui/modal'
// hooks
// import { useDisclosure } from '@chakra-ui/hooks'

export const LoginModal = () => {
  // const { isOpen: RiO, onOpen: RoO, onClose: RoC } = useDisclosure()

  const handleClick = () => {
    alert('modal doesnt open')
  }

  return (
    <>
      <LoginForm />

      <Text> Don't have an account? <Button variant='link' onClick={handleClick}> register</Button> </Text>
      {/* <Modal isOpen={RiO} onClose={RoC} content={<RegisterForm />} /> */}
    </>
  )
}
