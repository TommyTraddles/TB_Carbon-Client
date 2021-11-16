// components
import { Heading, Flex, Button, Text, HStack, VStack } from '@chakra-ui/react'
import { Step, Steps, useSteps } from 'chakra-ui-steps'
import { motion } from 'framer-motion'
import { Card } from 'components/ui/Card'
// data
import { Link } from 'react-router-dom'
import { paths } from 'services/routes'
// icons
import { FiCheckCircle } from 'react-icons/fi'

// ❌ ❌ ❌ ❌ RESET

export const ResetPrompt = ({ onReset, ...rest }) => {
  const MotionFlex = motion(Flex)
  return (
    <MotionFlex
      px={4}
      py={4}
      m="auto"
      w="full"
      flexDirection="column"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      {...rest}
    >
      <Heading fontSize="xl"> ¡Gracias por contestar! </Heading>
      <HStack>
        <Button mt={6} size="sm" onClick={onReset} variant="outline">
          Empezar de nuevo
        </Button>
        <Link to={paths.home}>
          <Button mt={6} size="sm">
            Ver mi resultado
          </Button>
        </Link>
      </HStack>
    </MotionFlex>
  )
}

// ❌ ❌ ❌ ❌ PASOS

export const StepButtons = ({
  nextStep,
  prevStep,
  prevDisabled,
  nextDisabled,
  isLast,
}) => {

  console.info(isLast)

  return (
    <HStack width="100%" justify="flex-end">
      <Button
        mr={4}
        variant="ghost"
        size="md"
        onClick={prevStep}
        isDisabled={prevDisabled}
      >
        Prev
      </Button>
      <Button isDisabled={nextDisabled} size="sm" onClick={nextStep}>
        {isLast ? 'Finish' : 'Next'}
      </Button>
    </HStack>
  )
}

// ❌ ❌ ❌ ❌ CONTENIDOS

export const Contents = ({ index, ...rest }) => {
  return (
    <Flex
      // height="auto"
      bg="gray.200"
      py={4}
      rounded="md"
      width="100%"
      align="center"
      justify="center"
      color="gray.800"
      {...rest}
    >
      <VStack>
        <Text>Step {index + 1} Contents</Text>
        {/* <Text>Step {index + 1} Contents</Text>
        <Text>Step {index + 1} Contents</Text>
        <Text>Step {index + 1} Contents</Text>
        <Text>Step {index + 1} Contents</Text>
        <Text>Step {index + 1} Contents</Text>
        <Text>Step {index + 1} Contents</Text>
        <Text>Step {index + 1} Contents</Text>
        <Text>Step {index + 1} Contents</Text>
        <Text>Step {index + 1} Contents</Text>
        <Text>Step {index + 1} Contents</Text>
        <Text>Step {index + 1} Contents</Text>
        <Text>Step {index + 1} Contents</Text>
        <Text>Step {index + 1} Contents</Text>
        <Text>Step {index + 1} Contents</Text>
        <Text>Step {index + 1} Contents</Text>
        <Text>Step {index + 1} Contents</Text>
        <Text>Step {index + 1} Contents</Text>
        <Text>Step {index + 1} Contents</Text>
        <Text>Step {index + 1} Contents</Text>
        <Text>Step {index + 1} Contents</Text>
        <Text>Step {index + 1} Contents</Text>
        <Text>Step {index + 1} Contents</Text>
        <Text>Step {index + 1} Contents</Text>
        <Text>Step {index + 1} Contents</Text>
        <Text>Step {index + 1} Contents</Text>
        <Text>Step {index + 1} Contents</Text>
        <Text>Step {index + 1} Contents</Text>
        <Text>Step {index + 1} Contents</Text>
        <Text>Step {index + 1} Contents</Text>
        <Text>Step {index + 1} Contents</Text>
        <Text>Step {index + 1} Contents</Text>
        <Text>Step {index + 1} Contents</Text>
        <Text>Step {index + 1} Contents</Text>
        <Text>Step {index + 1} Contents</Text>
        <Text>Step {index + 1} Contents</Text>
        <Text>Step {index + 1} Contents</Text>
        <Text>Step {index + 1} Contents</Text> */}
      </VStack>
    </Flex>
  )
}

// ❌ ❌ ❌ ❌ DATA

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

// ❌ ❌ ❌ ❌ CALCULADORA

export const CalculadoraForm = () => {
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  })

  const handleNext = () => {
    window.scrollTo(0, 0)
    nextStep()
  }
  const handlePrev = () => {
    window.scrollTo(0, 0)
    prevStep()
  }

  return (
    <>
      <Card px={3} py={4}>
        <Steps
          checkIcon={FiCheckCircle}
          orientation="vertical"
          activeStep={activeStep}
        >
          {steps.map(({ label, icon }, index) => {
            const isLast = index === steps.length - 1
            return (
              <Step width="100%" label={label} key={label} icon={icon}>
                {!isLast ? (
                  <Contents my={1} index={index} />
                ) : (
                  <Flex
                    mt="2"
                    py={4}
                    rounded="md"
                    align="center"
                    bg="gray.100"
                    justify="center"
                  >
                    <ResetPrompt onReset={reset} />
                  </Flex>
                )}
              </Step>
            )
          })}
        </Steps>

        {activeStep !== steps.length - 1 && (
          <Card
            position="fixed"
            bottom={3}
            left={0}
            right={0}
            maxW="sm"
            h={16}
            pt={3}
            m='auto'
          >
            <StepButtons
              nextStep={handleNext}
              prevStep={handlePrev}
              prevDisabled={activeStep === 0}
            />
          </Card>
        )}
      </Card>
    </>
  )
}
