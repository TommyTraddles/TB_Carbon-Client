// components
import { Heading, Divider } from '@chakra-ui/react'
import { UserLink } from 'components/User/Perfil/Links/Links'
import { UserExternalLink } from 'components/User/Perfil/Links/ExternalLink'
// data
import { paths } from 'services/routes'
import { user } from 'assets/data'
// icons
import { RiStarSmileLine } from 'react-icons/ri'
import { AiOutlineEuro } from 'react-icons/ai'

export const ManageSubs = () => {
  return (
    <>
      <Heading> Gestionar iniciativas </Heading>

      <UserLink path={paths.subscription} icon={<RiStarSmileLine />} name="Change your current plan"/>
      <Divider />
      <UserExternalLink icon={<AiOutlineEuro/>}  link={user.billing_link} name='Billing'/>
    </>
  )
}
