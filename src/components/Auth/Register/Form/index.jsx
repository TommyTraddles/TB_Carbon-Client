// components
import {
  FormControl,
  FormLabel,
  FormHelperText,
  InputGroup,
  InputRightElement,
  IconButton,
  Input,
  Heading,
  Box,
  Button,
} from '@chakra-ui/react'
// import { NewInputEmail } from 'components/ui/Input/_Email'
// icons
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
// hooks
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useToast } from '@chakra-ui/toast'
// data
import { authAPI } from 'services/api'
import { paths } from 'services/routes'

export const RegisterForm = ({ RoC }) => {

  // ✅  form hook
  const {
    register,
    formState: { errors },
    handleSubmit,
    trigger,
    setError,
  } = useForm()

  // ✅  show password
  const [show, setshow] = useState(false)
  const handleShow = () => setshow(!show)

  // ✅  form validation
  const registerOptions = {
    email: {
      required: 'campo requerido',
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'formato de correo no válido',
      },
    },
    password: {
      required: 'campo obligatorio',
      pattern: {
        value:
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?^&]).{8,}$/,
        message:
          'Al menos 8 caracteres, una minúscula, una mayúscula, un número, y un caracter especial',
      },
    },
  }
  // ✅ handle submit
  const toast = useToast()
  const history = useHistory()
  const [loading, setloading] = useState(false)
  const onSubmit = async (e) => {
    const result = await authAPI.register(e)
    if (!result.success){
      const serverError = {type: 'server', message: result.message }
      setError('email', serverError)
      setError('username', serverError)
    }
    if (result.success){
      toast({
        title: 'Registro exitoso',
        description: "",
        status: "success",
        duration: 5000,
        isClosable: true,
      })
      setloading(false)
      setTimeout( () => history.push(paths.firstCalculator), 2000)
    }
  }


  return (
    <>
      <Heading> Registro </Heading>

      <Box my={4}>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* 🔥 new email */}
          {/* <NewInputEmail
            kw='email'
            title='Email'
            placeholder='hola@gmail.com'
            errors={errors}
            {...register('email', registerOptions.email)}
            onKeyUp={() => trigger('email')}
          /> */}

          {/* 🔥 email */}
          <FormControl my={2}>
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

          {/* 🔥 password */}
          <FormControl my={2}>
            <FormLabel> Contraseña </FormLabel>
            <InputGroup>
              <Input
                type={show ? 'text' : 'password'}
                placeholder="contraseña"
                {...register('password', registerOptions.password)}
                onKeyUp={() => trigger('password')}
                isInvalid={errors.password ? true : false}
                errorBorderColor={errors.password ? 'red.500' : 'none'}
              />
              <InputRightElement>
                <IconButton
                  variant="ghost"
                  onClick={handleShow}
                  colorScheme={errors.password ? 'red' : 'primary'}
                  icon={show ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                />
              </InputRightElement>
            </InputGroup>
            {errors.password && (
              <FormHelperText color="red.500">
                {errors.password.message}
              </FormHelperText>
            )}
          </FormControl>

          {/* 🔥 submit */}
          <Button type="submit" w="full" isLoading={loading}>
            Registrar
          </Button>
        </form>
      </Box>
    </>
  )
}
