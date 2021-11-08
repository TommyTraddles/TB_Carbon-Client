// components
import { Heading, Divider, VStack, Box } from '@chakra-ui/react'
import { Modal } from 'components/ui/Modal'
import { LoginModal } from 'components/Auth/Login/Modal'
import { RegisterForm } from 'components/Auth/Register/Form'
import { PerfilCard } from 'components/User/Perfil/Avatar'
import { Feedback } from 'components/User/Perfil/Feedback'
import { FAQs } from 'components/User/Perfil/FAQs'
import { UserLink } from 'components/User/Perfil/Links/Links'
import { UserModal } from 'components/User/Perfil/Links/Modal'
import { ManageSubs } from 'components/User/Preferences/Manage'
// data
import { paths } from 'services/routes'
import { user } from 'assets/data'
// icons
import { FiMoon, FiLogOut, FiUser, FiSun } from 'react-icons/fi'
import { RiStarSmileLine, RiChatSmile2Line } from 'react-icons/ri'
import { AiOutlineInfoCircle } from 'react-icons/ai'
// hooks
import { useColorMode } from '@chakra-ui/color-mode'
import { useDisclosure } from '@chakra-ui/hooks'

export const Perfil = () => {
  // styling
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen: LiO, onOpen: LoO, onClose: LoC } = useDisclosure()
  const { isOpen: RiO, onOpen: RoO, onClose: RoC } = useDisclosure()
  const { isOpen: FiO, onOpen: FoO, onClose: FoC } = useDisclosure()
  const { isOpen: FAQiO, onOpen: FAQoO, onClose: FAQoC } = useDisclosure()
  const { isOpen: MSiO, onOpen: MSoO, onClose: MSoC } = useDisclosure()


  return (
    <>
      <Heading> Perfil </Heading>

      <VStack alignItems="flex-start" w="full" py={4}>
        {!user.logged ? (
          <>
          <Box bg="red.100" w='full'>
            <UserModal onClick={LoO} icon={<FiUser />} name="Log in" />
            <Modal isOpen={LiO} onClose={LoC} content={<LoginModal />} />
            <UserModal onClick={RoO} icon={<FiUser />} name="Registro" />
            <Modal isOpen={RiO} onClose={RoC} content={<RegisterForm />} />
          </Box>
            <Divider />
          </>
        ) : (
          <>
            <PerfilCard name={user.name} user={user.user} plan={user.plan} />
            <Divider />
            <UserModal onClick={MSoO} icon={<RiStarSmileLine />} name="Mis iniciativas" />
            <Modal isOpen={MSiO} onClose={MSoC} content={<ManageSubs />} />
            <Divider />
          </>
        )}


        <UserModal
          onClick={toggleColorMode}
          icon={colorMode === 'light' ? <FiMoon /> : <FiSun />}
          name={colorMode === 'light' ? 'Dark mode' : 'Light mode'}
        />

        <UserModal onClick={FAQoO} icon={<AiOutlineInfoCircle />} name="FAQs" />
        <Modal isOpen={FAQiO} onClose={FAQoC} content={<FAQs />} />

        {user.logged && (
          <>
            <UserModal onClick={FoO} icon={<RiChatSmile2Line />} name="Feedback" />
            <Modal isOpen={FiO} onClose={FoC} content={<Feedback />} />
            <Divider />
            <UserLink path={paths.onboarding} icon={<FiLogOut />} name="Log out" />
          </>
        )}
      </VStack>
    </>
  )
}
