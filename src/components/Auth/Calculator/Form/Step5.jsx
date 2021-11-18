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

export const Step5 = () => {
 
  // ✅  form Data
  const { data, setValue } = useFormData()
  const { register, formState: { errors }, handleSubmit, trigger } = useForm({
    defaultValues: {
      step_five_a: data.step_five_a,
      step_five_b: data.step_five_b,
      step_five_c: data.step_five_c,
      step_five_d: data.step_five_d,
    }
  })

  // ✅  form validation
  const registerOptions = {
    step_five_a: { required: 'campo requerido' },
    step_five_b: { required: 'campo requerido' },
    step_five_c: { required: 'campo requerido' },
    step_five_d: { required: 'campo requerido' },
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

          {/* 🔥 step_five_a */}
          <FormControl my={2}>
            <FormLabel size='sm'> step_five_a </FormLabel>
            <Input
              type="text"
              placeholder="text"
              {...register('step_five_a', registerOptions.step_five_a)}
              onKeyUp={() => trigger('step_five_a')}
              isInvalid={!!errors.step_five_a}
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
              errorBorderColor={errors.step_five_b ? 'red.500' : 'none'}
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
              errorBorderColor={errors.step_five_c ? 'red.500' : 'none'}
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
              errorBorderColor={errors.step_five_d ? 'red.500' : 'none'}
            />
            {errors.step_five_d && (
              <FormHelperText color="red.500">
                {errors.step_five_d.message}
              </FormHelperText>
            )}
          </FormControl>


          {/* 🔥 step_five_d */}
          {/* 🔥 submit */}
          <Button type="submit" w="full">
            Login
          </Button>
        </form>
      </Box>
    </>
  )
}
