// components
import { Flex } from '@chakra-ui/react'
import { Step, Steps, useSteps } from 'chakra-ui-steps'
import { Card } from 'components/ui/Card'
import { WizardContents } from 'components/Auth/Calculator/Wizard/Contents'
import { WizarResetPrompt } from 'components/Auth/Calculator/Wizard/Reset'
// icons
import { FiCheckCircle } from 'react-icons/fi'

const steps = [
  { label: 'Datos personales' },
  { label: 'Vivienda' },
  { label: 'Alimentación' },
  { label: 'Transporte' },
  { label: 'Vacaciones' },
  { label: 'Deporte' },
  {
    label: 'Gracias por contestar',
    isCompletedStep: true,
    icon: FiCheckCircle,
  },
]
// const steps = [
//   { label: '' },
//   { label: '' },
//   { label: '' },
//   { label: '' },
//   { label: '' },
//   { label: '' },
//   {
//     label: '',
//     isCompletedStep: true,
//     icon: FiCheckCircle,
//   },
// ]

export const CalculadoraForm = () => {
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  })

  const handleNext = () => {
    // window.scrollTo(0, 0)
    nextStep()
  }
  const handlePrev = () => {
    // window.scrollTo(0, 0)
    prevStep()
  }

  return (
    <>
      <Card px={3} py={4}>
        <Steps
          checkIcon={FiCheckCircle}
          orientation="vertical"
          activeStep={activeStep}
          // size='sm'
        >
          {steps.map(({ label, icon }, index) => {
            const isLast = index === steps.length - 1
            return (
              <Step width="100%" label={label} key={label} icon={icon}>
                {!isLast ? (
                  <>
                  {/* ❌ ❌ ❌ ❌ 1 STEPER COMO UN TUBO */}
                  <WizardContents my={1} index={index}  wizard={{ steps, activeStep, handleNext, handlePrev,}} />
                  </> 
                ) : (
                  <Flex
                    mt="2"
                    w="full"
                    py={4}
                    rounded="md"
                    align="center"
                    bg="gray.100"
                    justify="center"
                  >
                    <WizarResetPrompt onReset={reset} />
                  </Flex>
                )}
              </Step>
            )
          })}
        </Steps>
      </Card>
    </>
  )
}
