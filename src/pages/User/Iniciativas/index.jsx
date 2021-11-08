// components
import { Heading } from '@chakra-ui/layout'
import { IniciativasList } from 'components/User/Iniciativas/List'
import { BackButton } from 'components/ui/Button/Back'

export const Iniciativas = () => {
  return (
    <>
      <Heading> Iniciativas </Heading>
      <BackButton />
      <IniciativasList />
    </>
  )
}
