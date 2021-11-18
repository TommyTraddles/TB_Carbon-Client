// components
import { Heading, Button } from '@chakra-ui/react'
import { ResumeStatistics } from 'components/App/Home/Dashboard-acumulado'
import { ResumeSolutions } from 'components/App/Home/Dashboard-diario'
import { CalculatorModal } from 'components/App/Home/Modal'
import { ResumeStats } from 'components/App/Home/Stats-diario'
import { Modal } from 'components/ui/Modal'
// data
import { user } from 'assets/data'
import { Link } from 'react-router-dom'
import { paths } from 'services/routes'
// hooks
import { useDisclosure } from '@chakra-ui/hooks'
import { useEffect } from 'react'

export const Home = () => {
  // reminder
  const { isOpen: CiO, onOpen: CoO, onClose: CoC } = useDisclosure()
  useEffect(() => {
    if (!user.today_input && !user.today_input_skip) CoO()
  }, [CoO])


  // fetch


  return (
    <>
      <Heading> Progeso </Heading>

      <ResumeStats />
      <br />
      <ResumeStatistics />
      <br />
      <ResumeSolutions />
      <br />
      <Link to={paths.calculator}>
        <Button size="lg">Calcula tu huella de hoy</Button>
      </Link>

      <Modal
        isOpen={CiO}
        onClose={CoC}
        content={<CalculatorModal CoC={CoC} />}
      />
    </>
  )
}
