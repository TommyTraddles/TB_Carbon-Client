// compstep_four_ants
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Box,
  HStack,
  Button,
} from '@chakra-ui/react'
// hooks
import { useForm } from 'react-hook-form'
import { useCalculatorFormData } from 'services/hooks/use-calculator-form-data'

export const Step4 = ({ wizard }) => {

  // form Data
  const { data, setValue } = useCalculatorFormData()
  const {
    register,
    formState: { errors },
    handleSubmit,
    trigger,
  } = useForm({
    defaultValues: {
      step_four_a: data.step_four_a,
      step_four_b: data.step_four_b,
      step_four_c: data.step_four_c,
      step_four_d: data.step_four_d,
    },
  })

  // form validation
  const registerOptions = {
    step_four_a: { required: 'campo requerido' },
    step_four_b: { required: 'campo requerido' },
    step_four_c: { required: 'campo requerido' },
    step_four_d: { required: 'campo requerido' },
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
          {/* 🔥 step_four_a */}
          <FormControl my={2}>
            <FormLabel size="sm"> step_four_a </FormLabel>
            <Input
              type="text"
              placeholder="text"
              {...register('step_four_a', registerOptions.step_four_a)}
              onKeyUp={() => trigger('step_four_a')}
              isInvalid={errors.step_four_a ? true : false}
              errorBorderColor={errors.step_four_a ? 'red.500' : 'none'}
            />
            {errors.step_four_a && (
              <FormHelperText color="red.500">
                {errors.step_four_a.message}
              </FormHelperText>
            )}
          </FormControl>

          {/* 🔥 step_four_b */}
          <FormControl my={2}>
            <FormLabel> step_four_b </FormLabel>
            <Input
              type="text"
              placeholder="text"
              {...register('step_four_b', registerOptions.step_four_b)}
              onKeyUp={() => trigger('step_four_b')}
              isInvalid={errors.step_four_b ? true : false}
              errorBorderColor={errors.step_four_b ? 'red.500' : 'nstep_four_a'}
            />
            {errors.step_four_b && (
              <FormHelperText color="red.500">
                {errors.step_four_b.message}
              </FormHelperText>
            )}
          </FormControl>

          {/* 🔥 step_four_c */}
          <FormControl my={2}>
            <FormLabel> step_four_c </FormLabel>
            <Input
              type="text"
              placeholder="text"
              {...register('step_four_c', registerOptions.step_four_c)}
              onKeyUp={() => trigger('step_four_c')}
              isInvalid={errors.step_four_c ? true : false}
              errorBorderColor={errors.step_four_c ? 'red.500' : 'nstep_four_a'}
            />
            {errors.step_four_c && (
              <FormHelperText color="red.500">
                {errors.step_four_c.message}
              </FormHelperText>
            )}
          </FormControl>

          {/* 🔥 step_four_d */}
          <FormControl my={2}>
            <FormLabel> step_four_d </FormLabel>
            <Input
              type="text"
              placeholder="text"
              {...register('step_four_d', registerOptions.step_four_d)}
              onKeyUp={() => trigger('step_four_d')}
              isInvalid={errors.step_four_d ? true : false}
              errorBorderColor={errors.step_four_d ? 'red.500' : 'nstep_four_a'}
            />
            {errors.step_four_d && (
              <FormHelperText color="red.500">
                {errors.step_four_d.message}
              </FormHelperText>
            )}
          </FormControl>

          {/* 🔥 step_four_d */}
          {wizard.activeStep !== wizard.steps.length - 1 && (
<HStack width="full" justify="flex-end" m='auto' h={16} mt={3}>
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
          )}
        </form>
      </Box>
    </>
  )
}
