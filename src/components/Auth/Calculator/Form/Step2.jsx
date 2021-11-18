// components
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

export const Step2 = () => {
 
  // ✅  form Data
  const { data, setValue } = useFormData()
  const { register, formState: { errors }, handleSubmit, trigger } = useForm({
    defaultValues: {
      step_two_a: data.step_two_a,
      step_two_b: data.step_two_b,
      step_two_c: data.step_two_c,
      step_two_d: data.step_two_d,
    }
  })

  // ✅  form validation
  const registerOptions = {
    step_two_a: { required: 'campo requerido' },
    step_two_b: { required: 'campo requerido' },
    step_two_c: { required: 'campo requerido' },
    step_two_d: { required: 'campo requerido' },
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

          {/* 🔥 step_two_a */}
          <FormControl my={2}>
            <FormLabel size='sm'> step_two_a </FormLabel>
            <Input
              type="text"
              placeholder="text"
              {...register('step_two_a', registerOptions.step_two_a)}
              onKeyUp={() => trigger('step_two_a')}
              isInvalid={!!errors.step_two_a}
              errorBorderColor={errors.step_two_a ? 'red.500' : 'none'}
            />
            {errors.step_two_a && (
              <FormHelperText color="red.500">
                {errors.step_two_a.message}
              </FormHelperText>
            )}
          </FormControl>

          {/* 🔥 step_two_b */}
          <FormControl my={2}>
            <FormLabel> step_two_b </FormLabel>
            <Input
              type="text"
              placeholder="text"
              {...register('step_two_b', registerOptions.step_two_b)}
              onKeyUp={() => trigger('step_two_b')}
              isInvalid={errors.step_two_b ? true : false}
              errorBorderColor={errors.step_two_b ? 'red.500' : 'none'}
            />
            {errors.step_two_b && (
              <FormHelperText color="red.500">
                {errors.step_two_b.message}
              </FormHelperText>
            )}
          </FormControl>

          {/* 🔥 step_two_c */}
          <FormControl my={2}>
            <FormLabel> step_two_c </FormLabel>
            <Input
              type="text"
              placeholder="text"
              {...register('step_two_c', registerOptions.step_two_c)}
              onKeyUp={() => trigger('step_two_c')}
              isInvalid={errors.step_two_c ? true : false}
              errorBorderColor={errors.step_two_c ? 'red.500' : 'none'}
            />
            {errors.step_two_c && (
              <FormHelperText color="red.500">
                {errors.step_two_c.message}
              </FormHelperText>
            )}
          </FormControl>


          {/* 🔥 step_two_d */}
          <FormControl my={2}>
            <FormLabel> step_two_d </FormLabel>
            <Input
              type="text"
              placeholder="text"
              {...register('step_two_d', registerOptions.step_two_d)}
              onKeyUp={() => trigger('step_two_d')}
              isInvalid={errors.step_two_d ? true : false}
              errorBorderColor={errors.step_two_d ? 'red.500' : 'none'}
            />
            {errors.step_two_d && (
              <FormHelperText color="red.500">
                {errors.step_two_d.message}
              </FormHelperText>
            )}
          </FormControl>


          {/* 🔥 step_two_d */}
          {/* 🔥 submit */}
          <Button type="submit" w="full">
            Login
          </Button>
        </form>
      </Box>
    </>
  )
}
