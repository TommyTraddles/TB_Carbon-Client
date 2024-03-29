// compstep_six_ants
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

export const Step6 = ({ wizard }) => {

  // form Data
  const { data, setValue } = useCalculatorFormData()
  const {
    register,
    formState: { errors },
    handleSubmit,
    trigger,
  } = useForm({
    defaultValues: {
      step_six_a: data.step_six_a,
      step_six_b: data.step_six_b,
      step_six_c: data.step_six_c,
      step_six_d: data.step_six_d,
    },
  })

  // form validation
  const registerOptions = {
    step_six_a: { required: 'campo requerido' },
    step_six_b: { required: 'campo requerido' },
    step_six_c: { required: 'campo requerido' },
    step_six_d: { required: 'campo requerido' },
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
          {/* 🔥 step_six_a */}
          <FormControl my={2}>
            <FormLabel size="sm"> step_six_a </FormLabel>
            <Input
              type="text"
              placeholder="text"
              {...register('step_six_a', registerOptions.step_six_a)}
              onKeyUp={() => trigger('step_six_a')}
              isInvalid={errors.step_six_a ? true : false}
              errorBorderColor={errors.step_six_a ? 'red.500' : 'none'}
            />
            {errors.step_six_a && (
              <FormHelperText color="red.500">
                {errors.step_six_a.message}
              </FormHelperText>
            )}
          </FormControl>

          {/* 🔥 step_six_b */}
          <FormControl my={2}>
            <FormLabel> step_six_b </FormLabel>
            <Input
              type="text"
              placeholder="text"
              {...register('step_six_b', registerOptions.step_six_b)}
              onKeyUp={() => trigger('step_six_b')}
              isInvalid={errors.step_six_b ? true : false}
              errorBorderColor={errors.step_six_b ? 'red.500' : 'nstep_six_a'}
            />
            {errors.step_six_b && (
              <FormHelperText color="red.500">
                {errors.step_six_b.message}
              </FormHelperText>
            )}
          </FormControl>

          {/* 🔥 step_six_c */}
          <FormControl my={2}>
            <FormLabel> step_six_c </FormLabel>
            <Input
              type="text"
              placeholder="text"
              {...register('step_six_c', registerOptions.step_six_c)}
              onKeyUp={() => trigger('step_six_c')}
              isInvalid={errors.step_six_c ? true : false}
              errorBorderColor={errors.step_six_c ? 'red.500' : 'nstep_six_a'}
            />
            {errors.step_six_c && (
              <FormHelperText color="red.500">
                {errors.step_six_c.message}
              </FormHelperText>
            )}
          </FormControl>

          {/* 🔥 step_six_d */}
          <FormControl my={2}>
            <FormLabel> step_six_d </FormLabel>
            <Input
              type="text"
              placeholder="text"
              {...register('step_six_d', registerOptions.step_six_d)}
              onKeyUp={() => trigger('step_six_d')}
              isInvalid={errors.step_six_d ? true : false}
              errorBorderColor={errors.step_six_d ? 'red.500' : 'nstep_six_a'}
            />
            {errors.step_six_d && (
              <FormHelperText color="red.500">
                {errors.step_six_d.message}
              </FormHelperText>
            )}
          </FormControl>

          {/* 🔥 step_six_d */}
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
