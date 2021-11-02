// components
import { Heading, Divider, VStack } from '@chakra-ui/react'
import { BackButton } from 'components/ui/Button/Back'
import { UserModal } from 'components/User/Profile/Links/Modal'
import { Modal } from 'components/ui/Modal'
import { UpdateUser } from 'components/User/Preferences/Update'
import { ManageSubs } from 'components/User/Preferences/Manage'
import { DeleteAccount } from 'components/User/Preferences/Delete'
// icon
import { BsPencil } from 'react-icons/bs'
import { MdOutlinePayments } from 'react-icons/md'
import { AiOutlineDelete } from 'react-icons/ai'

// hooks
import { useDisclosure } from '@chakra-ui/hooks'

export const Preferences = () => {
  // modals
  const { isOpen: UIiO, onOpen: UIoO, onClose: UIoC } = useDisclosure()
  const { isOpen: MSiO, onOpen: MSoO, onClose: MSoC } = useDisclosure()
  const { isOpen: DAiO, onOpen: DAoO, onClose: DAoC } = useDisclosure()

  return (
    <>
      <Heading> Preferences </Heading>
      <BackButton/>

      <VStack alignItems="flex-start" w="full" py={4} bg='red.100'>
        <UserModal onClick={UIoO} icon={<BsPencil />} name="Update info" />
        <Modal isOpen={UIiO} onClose={UIoC} content={<UpdateUser />} />

        <Divider my={4} />
        <UserModal onClick={MSoO} icon={<MdOutlinePayments />} name="Manage subscription" />
        <Modal isOpen={MSiO} onClose={MSoC} content={<ManageSubs />} />

        <Divider my={4} />
        <UserModal onClick={DAoO} icon={<AiOutlineDelete />} name="Delete account" />
        <Modal isOpen={DAiO} onClose={DAoC} content={<DeleteAccount />} />

      </VStack>
    </>
  )
}
