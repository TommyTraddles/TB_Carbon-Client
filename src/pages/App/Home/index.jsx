// components
import { Heading } from '@chakra-ui/react'
import { ResumeStatistics } from 'components/App/Results/Statistics-short'
import { ResumeSolutions } from 'components/App/Results/Solutions-short'
import { CalculatorModal } from 'components/App/Calculator/Modal'
import { Modal } from 'components/ui/Modal'
// data
import { user } from 'assets/data'
// hooks
import { useDisclosure } from '@chakra-ui/hooks'
import { useEffect } from 'react'

export const Home = () => {
  // reminder
  const { isOpen: CiO, onOpen: CoO, onClose: CoC } = useDisclosure()
  useEffect(() => { if (!user.today_input) CoO() }, [CoO])

  return (
    <>
      <Heading> Progeso </Heading>
      <Modal isOpen={CiO} onClose={CoC} content={<CalculatorModal />} />

      <ResumeStatistics />
      <br />
      <ResumeSolutions />

    </>
  )
}
