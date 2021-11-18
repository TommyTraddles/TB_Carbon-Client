// components
import { Flex } from '@chakra-ui/react'
// form
import { Step1 } from 'components/Auth/Calculator/Form/Step1'
import { Step2 } from 'components/Auth/Calculator/Form/Step2'
import { Step3 } from 'components/Auth/Calculator/Form/Step3'
import { Step4 } from 'components/Auth/Calculator/Form/Step4'
import { Step5 } from 'components/Auth/Calculator/Form/Step5'
import { Step6 } from 'components/Auth/Calculator/Form/Step6'

export const WizardContents = ({ wizard, index, ...rest }) => {

  return (
    <Flex
      py={4}
      w="full"
      // border="2px solid"
      // borderColor="gray.200"
      bg="gray.200"
      rounded="md"
      justify="center"
      {...rest}
    >

      {/* ❌ ❌ ❌ ❌ REFACTORIZAR */}
      {index === 0 && <Step1 wizard={wizard} />}
      {index === 1 && <Step2 wizard={wizard} />}
      {index === 2 && <Step3 wizard={wizard} />}
      {index === 3 && <Step4 wizard={wizard} />}
      {index === 4 && <Step5 wizard={wizard} />}
      {index === 5 && <Step6 wizard={wizard} />}
    </Flex>
  )
}
