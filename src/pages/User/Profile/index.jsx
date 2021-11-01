// components
import { Heading, Divider, VStack } from '@chakra-ui/react'
import { Modal } from 'components/ui/Modal'
import { LoginModal } from 'components/Login/Modal'
import { RegisterModal } from 'components/Register/Modal'
import { ProfileCard } from 'components/Profile/Avatar'
import { UserLink, UserModal } from 'components/Profile/Links'
// data
import { paths } from 'services/routes'
// icons
import { FiSettings, FiMoon, FiLogOut, FiUser, FiSun } from 'react-icons/fi'
import { RiStarSmileLine } from 'react-icons/ri'
// hooks
import { useColorMode } from '@chakra-ui/color-mode'
import { useDisclosure } from '@chakra-ui/hooks'

export const Profile = () => {
  // styling
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen: LiO, onOpen: LoO, onClose: LoC } = useDisclosure()
  const { isOpen: RiO, onOpen: RoO, onClose: RoC } = useDisclosure()
  // loging
  const logged = true

  return (
    <>
      <Heading> Profile </Heading>

      <VStack alignItems="flex-start" w="full" py={4}>
        {!logged ? (
          <>
            <UserModal onClick={LoO} icon={<FiUser />} name="Login" />
            <Modal isOpen={LiO} onClose={LoC} content={<LoginModal />} />
            <UserModal onClick={RoO} icon={<FiUser />} name="Register" />
            <Modal isOpen={RiO} onClose={RoC} content={<RegisterModal />} />
            <Divider />
          </>
        ) : (
          <>
            <ProfileCard />
            <Divider />
            <UserLink
              path={paths.preferences}
              icon={<FiSettings />}
              name="Preferences"
            />
            <Divider />
            <UserLink
              path={paths.subscription}
              icon={<RiStarSmileLine />}
              name="Take action"
            />
          </>
        )}

        <UserModal
          onClick={toggleColorMode}
          icon={colorMode === 'light' ? <FiMoon /> : <FiSun />}
          name={colorMode === 'light' ? 'Dark mode' : 'Ligth mode'}
        />

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
