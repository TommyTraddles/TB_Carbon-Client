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
// icons
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
// hooks
import { useForm } from 'react-hook-form'
import { useState } from 'react'
// import { useHistory } from 'react-router-dom'
// import { useDisclosure } from '@chakra-ui/hooks'
// fetch
import { authAPI } from 'services/api'

export const RegisterForm = ({ RoC }) => {
  // ❌ modals
  // const { isOpen: TYPiO, onOpen: TYPoO, onClose: TYPoC } = useDisclosure()
  // ❌ redirect
  // const history = useHistory()

  // form
  const {
    register,
    formState: { errors },
    handleSubmit,
    trigger,
    setError,
  } = useForm()


  // ✅  password
  const [show, setshow] = useState(false)
  const handleShow = () => setshow(!show)

  // ✅ submit
  const onSubmit = async (e) => {
    const result = await authAPI.register(e)
    if (!result.success){
      const serverError = {type: 'server', message: result.message }
      setError('email', serverError)
      setError('username', serverError)
    }
    if (result.success){
      RoC()
    }
  }

  // validation
  const registerOptions = {
    email: {
      required: 'campo requerido',
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'formato de correo no válido',
      },
    },
    username: {
      required: 'campo obligatorio',
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

  return (
    <>
      <Heading> Registro </Heading>

      <Box my={4}>
        <form onSubmit={handleSubmit(onSubmit)}>
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

          {/* 🔥 username */}
          <FormControl my={2}>
            <FormLabel> Username </FormLabel>
            <Input
              type="text"
              placeholder="username"
              {...register('username', registerOptions.username)}
              onKeyUp={() => trigger('username')}
              isInvalid={errors.username ? true : false}
              errorBorderColor={errors.username ? 'red.500' : 'none'}
            />
            {errors.username && (
              <FormHelperText color="red.500">
                {errors.username.message}
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
                isInvalid={errors.username ? true : false}
                errorBorderColor={errors.username ? 'red.500' : 'none'}
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
          <Button type="submit" w="full">
            Registrar
          </Button>
        </form>
      </Box>
    </>
  )
}
