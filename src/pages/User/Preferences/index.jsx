// components
import { Heading, Divider, VStack } from '@chakra-ui/react'
import { BackButton } from 'components/ui/Button/Back'
import { UserModal } from 'components/User/Perfil/Links/Modal'
import { Modal } from 'components/ui/Modal'
import { UpdateUser } from 'components/User/Preferences/Update'
import { ManageSubs } from 'components/User/Preferences/Manage'
// import { DeleteAccount } from 'components/User/Preferences/Delete'
// icon
import { BsPencil } from 'react-icons/bs'
import { MdOutlinePayments } from 'react-icons/md'
// import { AiOutlineDelete } from 'react-icons/ai'
// hooks
import { useDisclosure } from '@chakra-ui/hooks'
// data
import { Redirect } from 'react-router-dom'
import { user } from 'assets/data'
import { paths } from 'services/routes'

export const Preferences = () => {
  // modals
  const { isOpen: UIiO, onOpen: UIoO, onClose: UIoC } = useDisclosure()
  const { isOpen: MSiO, onOpen: MSoO, onClose: MSoC } = useDisclosure()
  // const { isOpen: DAiO, onOpen: DAoO, onClose: DAoC } = useDisclosure()

  if(!user.logged){
    return(
      <Redirect to={paths.perfil}/>
    )
  }

  return (
    <>
      <Heading> Preferences </Heading>
      <BackButton/>

      <VStack bg='red.100' alignItems="flex-start" w="full" py={4}>

        <UserModal onClick={UIoO} icon={<BsPencil />} name="Actualizar mi información" />
        <Modal isOpen={UIiO} onClose={UIoC} content={<UpdateUser />} />

        <Divider my={4} />
        <UserModal onClick={MSoO} icon={<MdOutlinePayments />} name="Gestionar mis donaciones" />
        <Modal isOpen={MSiO} onClose={MSoC} content={<ManageSubs />} />

        {/* <Divider my={4} />
        <UserModal onClick={DAoO} icon={<AiOutlineDelete />} name="Delete account" />
        <Modal isOpen={DAiO} onClose={DAoC} content={<DeleteAccount />} /> */}

      </VStack>
    </>
  )
}
