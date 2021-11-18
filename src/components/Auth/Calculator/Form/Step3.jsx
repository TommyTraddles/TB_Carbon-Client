// components
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Box,
} from '@chakra-ui/react'
import { WizardSteps } from '../Wizard/Steps'
// hooks
import { useForm } from 'react-hook-form'
import { useCalculatorFormData } from 'services/hooks/use-calculator-form-data'

export const Step3 = ({ wizard }) => {
 
  // ✅  form Data
  const { data, setValue } = useCalculatorFormData()
  const { register, formState: { errors }, handleSubmit, trigger } = useForm({
    defaultValues: {
      step_three_a: data.step_three_a,
      step_three_b: data.step_three_b,
      step_three_c: data.step_three_c,
      step_three_d: data.step_three_d,
    }
  })

  // ✅  form validation
  const registerOptions = {
    step_three_a: { required: 'campo requerido' },
    step_three_b: { required: 'campo requerido' },
    step_three_c: { required: 'campo requerido' },
    step_three_d: { required: 'campo requerido' },
  }

  // ✅ handle submit
  const onSubmit = async (e) => {
    setValue(e)
    console.info('> form:', e)
    console.info('> errors', errors)
    console.info('> context-form-data: ', data)
    // console.info('> useCalculatorFormData hook: ', data)
  }

  return (
    <>
      <Box py={3} w='300px'>
        <form onSubmit={handleSubmit(onSubmit)}>

          {/* 🔥 step_three_a */}
          <FormControl my={2}>
            <FormLabel size='sm'> step_three_a </FormLabel>
            <Input
              type="text"
              placeholder="text"
              {...register('step_three_a', registerOptions.step_three_a)}
              onKeyUp={() => trigger('step_three_a')}
              isInvalid={!!errors.step_three_a}
              errorBorderColor={errors.step_three_a ? 'red.500' : 'none'}
            />
            {errors.step_three_a && (
              <FormHelperText color="red.500">
                {errors.step_three_a.message}
              </FormHelperText>
            )}
          </FormControl>

          {/* 🔥 step_three_b */}
          <FormControl my={2}>
            <FormLabel> step_three_b </FormLabel>
            <Input
              type="text"
              placeholder="text"
              {...register('step_three_b', registerOptions.step_three_b)}
              onKeyUp={() => trigger('step_three_b')}
              isInvalid={errors.step_three_b ? true : false}
              errorBorderColor={errors.step_three_b ? 'red.500' : 'none'}
            />
            {errors.step_three_b && (
              <FormHelperText color="red.500">
                {errors.step_three_b.message}
              </FormHelperText>
            )}
          </FormControl>

          {/* 🔥 step_three_c */}
          <FormControl my={2}>
            <FormLabel> step_three_c </FormLabel>
            <Input
              type="text"
              placeholder="text"
              {...register('step_three_c', registerOptions.step_three_c)}
              onKeyUp={() => trigger('step_three_c')}
              isInvalid={errors.step_three_c ? true : false}
              errorBorderColor={errors.step_three_c ? 'red.500' : 'none'}
            />
            {errors.step_three_c && (
              <FormHelperText color="red.500">
                {errors.step_three_c.message}
              </FormHelperText>
            )}
          </FormControl>


          {/* 🔥 step_three_d */}
          <FormControl my={2}>
            <FormLabel> step_three_d </FormLabel>
            <Input
              type="text"
              placeholder="text"
              {...register('step_three_d', registerOptions.step_three_d)}
              onKeyUp={() => trigger('step_three_d')}
              isInvalid={errors.step_three_d ? true : false}
              errorBorderColor={errors.step_three_d ? 'red.500' : 'none'}
            />
            {errors.step_three_d && (
              <FormHelperText color="red.500">
                {errors.step_three_d.message}
              </FormHelperText>
            )}
          </FormControl>

          {/* 🔥 step_three_d */}
          <WizardSteps wizard={wizard} fetch={onSubmit}/>
        </form>
      </Box>
    </>
  )
}
