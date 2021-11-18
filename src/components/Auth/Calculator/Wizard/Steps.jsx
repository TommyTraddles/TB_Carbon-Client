import { Button, HStack } from '@chakra-ui/react'
import { Card } from 'components/ui/Card'

export const WizardStepButtons = ({
  fetch,
  nextStep,
  prevStep,
  prevDisabled,
  nextDisabled,
  isLast,
}) => {

  const handleNext = () => {
    fetch()
    nextStep()
  }

  return (
    <HStack width="full" justify="flex-end">
      <Button
        mr={4}
        variant="ghost"
        size="md"
        onClick={prevStep}
        isDisabled={prevDisabled}
      >
        Prev
      </Button>
      <Button type='input' isDisabled={nextDisabled} size="sm" onClick={handleNext}>
        {isLast ? 'Finish' : 'Next'}
      </Button>
    </HStack>
  )
}


export const WizardSteps = ({ wizard, fetch}) => {
  return (
    <>
      {wizard.activeStep !== wizard.steps.length - 1 && (
        <Card
          // position="fixed"
          // bottom={3}
          // left={0}
          // right={0}
          // maxW="sm"
          h={16}
          pt={3}
          m="auto"
        >
          <WizardStepButtons
            fetch={fetch}
            nextStep={wizard.handleNext}
            prevStep={wizard.handlePrev}
            prevDisabled={wizard.activeStep === 0}
          />
        </Card>
      )}
    </>
  )
}
