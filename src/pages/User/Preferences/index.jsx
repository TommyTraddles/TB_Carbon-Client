// components
import { Heading, Divider, Text } from '@chakra-ui/react'
import { BackButton } from 'components/ui/Button/Back'
// import { UserModal } from 'components/User/Profile/Links'
// import { Modal } from 'components/ui/Modal'
// data
import { paths } from 'services/routes'
// icon
// import { FiUser } from 'react-icons/fi'
// hooks
// import { useDisclosure } from '@chakra-ui/hooks'

export const Preferences = () => {
  // const { isOpen: LiO, onOpen: LoO, onClose: LoC } = useDisclosure()
  return (
    <>
      <Heading> Preferences </Heading>
      <BackButton to={paths.profile} />

      {/* <UserModal onClick={LoO} icon={<FiUser />} name="Update info" />
      <Modal isOpen={LiO} onClose={LoC} content="Image" /> */}

      <Divider my={4}/>
      <Heading size='xs'> Update </Heading>
      <Text> Image </Text>
      <Text> Email </Text>
      <Text> User </Text>
      <Text> Pass </Text>

      <Divider my={4}/>
      <Heading size='xs'> Manage subsription</Heading>
      <Text> Planes </Text>
      <Text> Payment - stripe </Text>
      <Text> Billing - stripe </Text>

      <Divider my={4}/>
      <Heading size='xs'> Manage account</Heading>
      <Text> Delete </Text>
    </>
  )
}
