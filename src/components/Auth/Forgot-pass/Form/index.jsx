// components
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Heading,
  Box,
  Button,
} from '@chakra-ui/react'
// hooks
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
// data
import { authAPI } from 'services/api'
import { paths } from 'services/routes'

export const ForgotForm = () => {
  const history = useHistory()

  // ✅  form hook
  const {
    register,
    formState: { errors },
    handleSubmit,
    trigger,
    setError,
  } = useForm()

  // ✅  form validation
  const registerOptions = {
    email: {
      required: 'campo requerido',
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'formato de correo no válido',
      },
    },
  }

  // ✅ handle submit
  const onSubmit = async (e) => {
    const result = await authAPI.forgot(e)
    if (!result.success) {
      console.info(result)
      const serverError = { type: 'server', message: result.message }
      setError('email', serverError)
    }
    if (result.success) {
      console.info(result)
      history.push(paths.index)
    }
  }

  return (
    <>
      <Heading> Olvidé mi contraseña </Heading>

      <Box my={4}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl my={2}>
            {/* 🔥 email */}
            <FormLabel> Email </FormLabel>
            <Input
              type="email"
              placeholder="hola@gmail.com"
              {...register('email', registerOptions.email)}
              onKeyUp={() => trigger('email')}
              isInvalid={errors.email ? true : false}
              errorBorderColor={errors.email ? 'red.500' : 'none'}
            />
            {errors.email && (
              <FormHelperText color="red.500">
                {errors.email.message}
              </FormHelperText>
            )}
          </FormControl>

          {/* 🔥 submit */}
          <Button type="submit" w="full">
            Enviar mail
          </Button>
        </form>
      </Box>
    </>
  )
}
