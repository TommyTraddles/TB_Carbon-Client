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
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { useToast } from '@chakra-ui/toast'
// data
import { authAPI } from 'services/api'
import { paths } from 'services/routes'

export const ForgotForm = () => {
  
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
  const toast = useToast()
  const history = useHistory()
  const [loading, setloading] = useState(false)
  const onSubmit = async (e) => {
    setloading(true)
    const result = await authAPI.forgot(e)
    if (!result.success) {
      const serverError = { type: 'server', message: result.message }
      setError('email', serverError)
      setloading(false)
    }
    if (result.success) {
      setloading(false)
      toast({
        title: 'Correo enviado',
        description: "Hemos enviado un correo",
        status: "success",
        duration: 5000,
        isClosable: true,
      })
      setTimeout( () => history.push(paths.index), 3000)
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
          <Button type="submit" w="full" isLoading={loading}>
            Enviar mail
          </Button>
        </form>
      </Box>
    </>
  )
}
