// components
import { Heading, Divider, VStack } from '@chakra-ui/react'
import { Modal } from 'components/ui/Modal'
import { LoginModal } from 'components/Login/Modal'
import { RegisterModal } from 'components/Register/Modal'
import { ProfileCard } from 'components/Profile/Avatar'
import { UserLink } from 'components/Profile/Links'
// data
import { Link } from 'react-router-dom'
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
  const logged = false

  return (
    <>
      <Heading> Profile </Heading>

      <VStack alignItems="flex-start" w="full" py={4}>
        {!logged ? (
          <>
            <UserLink onClick={LoO} icon={<FiUser />} name="Login" />
            <Modal isOpen={LiO} onClose={LoC} content={<LoginModal />} />
            <UserLink onClick={RoO} icon={<FiUser />} name="Register" />
            <Modal isOpen={RiO} onClose={RoC} content={<RegisterModal />} />
            <Divider />
          </>
        ) : (
          <>
            <ProfileCard />
            <Divider />
            <Link to={paths.preferences}>
              <UserLink icon={<FiSettings />} name="Preferences" />
            </Link>
            <Divider />
            <Link to={paths.subscription}>
              <UserLink icon={<RiStarSmileLine />} name="Take action" />
            </Link>
          </>
        )}

        <UserLink
          onClick={toggleColorMode}
          icon={colorMode === 'light' ? <FiMoon /> : <FiSun />}
          name={colorMode === 'light' ? 'Dark mode' : 'Ligth mode'}
        />

        {logged && (
          <>
            <Divider />
            <Link to={paths.home}>
              <UserLink icon={<FiLogOut />} name="Logout" />
            </Link>
          </>
        )}
      </VStack>
    </>
  )
}
