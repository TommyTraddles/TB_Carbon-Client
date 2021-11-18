// compstep_five_ants
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Box,
  HStack,
  Button,
} from '@chakra-ui/react'
import { Card } from 'components/ui/Card'
// hooks
import { useForm } from 'react-hook-form'
import { useCalculatorFormData } from 'services/hooks/use-calculator-form-data'

export const Step5 = ({ wizard }) => {

  // form Data
  const { data, setValue } = useCalculatorFormData()
  const {
    register,
    formState: { errors },
    handleSubmit,
    trigger,
  } = useForm({
    defaultValues: {
      step_five_a: data.step_five_a,
      step_five_b: data.step_five_b,
      step_five_c: data.step_five_c,
      step_five_d: data.step_five_d,
    },
  })

  // form validation
  const registerOptions = {
    step_five_a: { required: 'campo requerido' },
    step_five_b: { required: 'campo requerido' },
    step_five_c: { required: 'campo requerido' },
    step_five_d: { required: 'campo requerido' },
  }

  // handle submit
  const onSubmit = async (e) => {
    setValue(e)
    wizard.nextStep()
  }

  return (
    <>
      <Box py={3} w="300px">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* 🔥 step_five_a */}
          <FormControl my={2}>
            <FormLabel size="sm"> step_five_a </FormLabel>
            <Input
              type="text"
              placeholder="text"
              {...register('step_five_a', registerOptions.step_five_a)}
              onKeyUp={() => trigger('step_five_a')}
              isInvalid={errors.step_five_a ? true : false}
              errorBorderColor={errors.step_five_a ? 'red.500' : 'none'}
            />
            {errors.step_five_a && (
              <FormHelperText color="red.500">
                {errors.step_five_a.message}
              </FormHelperText>
            )}
          </FormControl>

          {/* 🔥 step_five_b */}
          <FormControl my={2}>
            <FormLabel> step_five_b </FormLabel>
            <Input
              type="text"
              placeholder="text"
              {...register('step_five_b', registerOptions.step_five_b)}
              onKeyUp={() => trigger('step_five_b')}
              isInvalid={errors.step_five_b ? true : false}
              errorBorderColor={errors.step_five_b ? 'red.500' : 'nstep_five_a'}
            />
            {errors.step_five_b && (
              <FormHelperText color="red.500">
                {errors.step_five_b.message}
              </FormHelperText>
            )}
          </FormControl>

          {/* 🔥 step_five_c */}
          <FormControl my={2}>
            <FormLabel> step_five_c </FormLabel>
            <Input
              type="text"
              placeholder="text"
              {...register('step_five_c', registerOptions.step_five_c)}
              onKeyUp={() => trigger('step_five_c')}
              isInvalid={errors.step_five_c ? true : false}
              errorBorderColor={errors.step_five_c ? 'red.500' : 'nstep_five_a'}
            />
            {errors.step_five_c && (
              <FormHelperText color="red.500">
                {errors.step_five_c.message}
              </FormHelperText>
            )}
          </FormControl>

          {/* 🔥 step_five_d */}
          <FormControl my={2}>
            <FormLabel> step_five_d </FormLabel>
            <Input
              type="text"
              placeholder="text"
              {...register('step_five_d', registerOptions.step_five_d)}
              onKeyUp={() => trigger('step_five_d')}
              isInvalid={errors.step_five_d ? true : false}
              errorBorderColor={errors.step_five_d ? 'red.500' : 'nstep_five_a'}
            />
            {errors.step_five_d && (
              <FormHelperText color="red.500">
                {errors.step_five_d.message}
              </FormHelperText>
            )}
          </FormControl>

          {/* 🔥 step_five_d */}
          {wizard.activeStep !== wizard.steps.length - 1 && (
            <Card
              // position="fixed"
              // bottom={3}
              // left={0}
              // right={0}
              // bg='white'
              maxW="sm"
              h={16}
              pt={3}
              m="auto"
            >
              <HStack width="full" justify="flex-end">
                <Button
                  mr={4}
                  variant="ghost"
                  size="md"
                  onClick={wizard.prevStep}
                  isDisabled={wizard.activeStep === 0}
                >
                  Previo
                </Button>
                <Button
                  type="submit"
                  isDisabled={wizard.nextDisabled}
                  size="sm"
                  onClick={fetch}
                >
                  {wizard.isLast ? 'Finaliza' : 'Siguiente'}
                </Button>
              </HStack>
            </Card>
          )}
        </form>
      </Box>
    </>
  )
}
