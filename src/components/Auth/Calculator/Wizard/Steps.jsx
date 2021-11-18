import { Button, HStack } from '@chakra-ui/react'

export const WizardStepButtons = ({
  nextStep,
  prevStep,
  prevDisabled,
  nextDisabled,
  isLast,
}) => {

  // render

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
      <Button isDisabled={nextDisabled} size="sm" onClick={nextStep}>
        {isLast ? 'Finish' : 'Next'}
      </Button>
    </HStack>
  )
}
