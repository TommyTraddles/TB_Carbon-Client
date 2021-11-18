// compstep_one_ants
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Box,
  Button,
} from '@chakra-ui/react'
// hooks
import { useForm } from 'react-hook-form'
import { useFormData } from 'services/hooks/use-form-data'

export const Step1 = () => {
 
  // ✅  form Data
  const { data, setValue } = useFormData()
  const { register, formState: { errors }, handleSubmit, trigger } = useForm({
    defaultValues: {
      step_one_a: data.step_one_a,
      step_one_b: data.step_one_b,
      step_one_c: data.step_one_c,
      step_one_d: data.step_one_d,
    }
  })

  // ✅  form validation
  const registerOptions = {
    step_one_a: { required: 'campo requerido' },
    step_one_b: { required: 'campo requerido' },
    step_one_c: { required: 'campo requerido' },
    step_one_d: { required: 'campo requerido' },
  }

  // ✅ handle submit
  const onSubmit = async (e) => {
    setValue(e)
    console.info('> form:', e)
    console.info('> errors', errors)
    console.info('> context-form-data: ', data)
    // console.info('> useFormData hook: ', data)
  }

  return (
    <>
      <Box py={3} w='300px'>
        <form onSubmit={handleSubmit(onSubmit)}>

          {/* 🔥 step_one_a */}
          <FormControl my={2}>
            <FormLabel size='sm'> step_one_a </FormLabel>
            <Input
              type="text"
              placeholder="text"
              {...register('step_one_a', registerOptions.step_one_a)}
              onKeyUp={() => trigger('step_one_a')}
              isInvalid={errors.step_one_a ? true : false}
              errorBorderColor={errors.step_one_a ? 'red.500' : 'none'}
            />
            {errors.step_one_a && (
              <FormHelperText color="red.500">
                {errors.step_one_a.message}
              </FormHelperText>
            )}
          </FormControl>

          {/* 🔥 step_one_b */}
          <FormControl my={2}>
            <FormLabel> step_one_b </FormLabel>
            <Input
              type="text"
              placeholder="text"
              {...register('step_one_b', registerOptions.step_one_b)}
              onKeyUp={() => trigger('step_one_b')}
              isInvalid={errors.step_one_b ? true : false}
              errorBorderColor={errors.step_one_b ? 'red.500' : 'nstep_one_a'}
            />
            {errors.step_one_b && (
              <FormHelperText color="red.500">
                {errors.step_one_b.message}
              </FormHelperText>
            )}
          </FormControl>

          {/* 🔥 step_one_c */}
          <FormControl my={2}>
            <FormLabel> step_one_c </FormLabel>
            <Input
              type="text"
              placeholder="text"
              {...register('step_one_c', registerOptions.step_one_c)}
              onKeyUp={() => trigger('step_one_c')}
              isInvalid={errors.step_one_c ? true : false}
              errorBorderColor={errors.step_one_c ? 'red.500' : 'nstep_one_a'}
            />
            {errors.step_one_c && (
              <FormHelperText color="red.500">
                {errors.step_one_c.message}
              </FormHelperText>
            )}
          </FormControl>


          {/* 🔥 step_one_d */}
          <FormControl my={2}>
            <FormLabel> step_one_d </FormLabel>
            <Input
              type="text"
              placeholder="text"
              {...register('step_one_d', registerOptions.step_one_d)}
              onKeyUp={() => trigger('step_one_d')}
              isInvalid={errors.step_one_d ? true : false}
              errorBorderColor={errors.step_one_d ? 'red.500' : 'nstep_one_a'}
            />
            {errors.step_one_d && (
              <FormHelperText color="red.500">
                {errors.step_one_d.message}
              </FormHelperText>
            )}
          </FormControl>


          {/* 🔥 step_one_d */}
          {/* 🔥 submit */}
          <Button type="submit" w="full">
            Login
          </Button>
        </form>
      </Box>
    </>
  )
}
