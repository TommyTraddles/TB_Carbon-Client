// components
import { Heading, Divider, VStack, Box } from '@chakra-ui/react'
import { Modal } from 'components/ui/Modal'
import { LoginModal } from 'components/Auth/Login/Modal'
import { RegisterModal } from 'components/Auth/Register/Modal'
import { ProfileCard } from 'components/User/Profile/Avatar'
import { Feedback } from 'components/User/Profile/Feedback'
import { FAQs } from 'components/User/Profile/FAQs'
import { UserLink, UserModal } from 'components/User/Profile/Links'
// data
import { paths } from 'services/routes'
// icons
import { FiSettings, FiMoon, FiLogOut, FiUser, FiSun } from 'react-icons/fi'
import { RiStarSmileLine, RiChatSmile2Line } from 'react-icons/ri'
import { AiOutlineCalculator, AiOutlineHistory, AiOutlineTrophy, AiOutlineInfoCircle } from 'react-icons/ai'
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
  // loging
  const logged = true

  return (
    <>
      <Heading> Profile </Heading>

      <VStack alignItems="flex-start" w="full" py={4}>
        {!logged ? (
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
            <ProfileCard />
            <Divider />
            <UserLink path={paths.preferences} icon={<FiSettings />} name="Preferences"/>
            <Divider />
            <UserLink path={paths.subscription} icon={<RiStarSmileLine />} name="Take action"/>
            <Divider />
          </>
        )}

        <UserLink path={paths.history} icon={<AiOutlineHistory />} name="History"/>
        <UserLink path={paths.calculator} icon={<AiOutlineCalculator />} name="Calcule"/>
        <UserLink path={paths.leaderboard} icon={<AiOutlineTrophy />} name="Ranking"/>
        <Divider />



        <UserModal
          onClick={toggleColorMode}
          icon={colorMode === 'light' ? <FiMoon /> : <FiSun />}
          name={colorMode === 'light' ? 'Dark mode' : 'Light mode'}
        />

        <Box bg="red.100" w='full'>
          <UserModal onClick={FoO} icon={<RiChatSmile2Line />} name="Feedback" />
          <Modal isOpen={FiO} onClose={FoC} content={<Feedback />} />

          <UserModal onClick={FAQoO} icon={<AiOutlineInfoCircle />} name="FAQs" />
          <Modal isOpen={FAQiO} onClose={FAQoC} content={<FAQs />} />
        </Box>

        {logged && (
          <>
            <Divider />
            <UserLink path={paths.onboarding} icon={<FiLogOut />} name="Logout" />
          </>
        )}
      </VStack>
    </>
  )
}
