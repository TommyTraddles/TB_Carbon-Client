// components
import { Heading, Divider, VStack, Box } from '@chakra-ui/react'
import { Modal } from 'components/ui/Modal'
import { LoginModal } from 'components/Auth/Login/Form'
import { RegisterModal } from 'components/Auth/Register/Form'
import { ProfileCard } from 'components/User/Profile/Avatar'
import { Feedback } from 'components/User/Profile/Feedback'
import { FAQs } from 'components/User/Profile/FAQs'
import { UserLink } from 'components/User/Profile/Links/Links'
import { UserModal } from 'components/User/Profile/Links/Modal'
// data
import { paths } from 'services/routes'
import { user } from 'assets/data'
// icons
import { FiSettings, FiMoon, FiLogOut, FiUser, FiSun } from 'react-icons/fi'
import { RiStarSmileLine, RiChatSmile2Line } from 'react-icons/ri'
import { AiOutlineInfoCircle } from 'react-icons/ai'
// hooks
import { useColorMode } from '@chakra-ui/color-mode'
import { useDisclosure } from '@chakra-ui/hooks'

export const Profile = () => {
  // styling
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen: LiO, onOpen: LoO, onClose: LoC } = useDisclosure()
  const { isOpen: RiO, onOpen: RoO, onClose: RoC } = useDisclosure()
  const { isOpen: FiO, onOpen: FoO, onClose: FoC } = useDisclosure()
  const { isOpen: FAQiO, onOpen: FAQoO, onClose: FAQoC } = useDisclosure()

  return (
    <>
      <Heading> Profile </Heading>

      <VStack alignItems="flex-start" w="full" py={4}>
        {!user.logged ? (
          <>
          <Box bg="red.100" w='full'>
            <UserModal onClick={LoO} icon={<FiUser />} name="Login" />
            <Modal isOpen={LiO} onClose={LoC} content={<LoginModal />} />
            <UserModal onClick={RoO} icon={<FiUser />} name="Register" />
            <Modal isOpen={RiO} onClose={RoC} content={<RegisterModal />} />
          </Box>
            <Divider />
          </>
        ) : (
          <>
            <ProfileCard name={user.name} user={user.user} plan={user.plan} />
            <Divider />
            <UserLink path={paths.preferences} icon={<FiSettings />} name="Preferences"/>
            <Divider />
            <UserLink path={paths.subscription} icon={<RiStarSmileLine />} name="Take action"/>
            <Divider />
          </>
        )}

        <UserModal
          onClick={toggleColorMode}
          icon={colorMode === 'light' ? <FiMoon /> : <FiSun />}
          name={colorMode === 'light' ? 'Dark mode' : 'Light mode'}
        />

        <UserModal onClick={FoO} icon={<RiChatSmile2Line />} name="Feedback" />
        <Modal isOpen={FiO} onClose={FoC} content={<Feedback />} />

        <UserModal onClick={FAQoO} icon={<AiOutlineInfoCircle />} name="FAQs" />
        <Modal isOpen={FAQiO} onClose={FAQoC} content={<FAQs />} />

        {user.logged && (
          <>
            <Divider />
            <UserLink path={paths.onboarding} icon={<FiLogOut />} name="Logout" />
          </>
        )}
      </VStack>
    </>
  )
}
