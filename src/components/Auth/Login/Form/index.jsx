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
  HStack,
} from '@chakra-ui/react'
// icons
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
// hooks
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useToast } from '@chakra-ui/toast'
// data
import { Link } from 'react-router-dom'
import { authAPI } from 'services/api'
import { paths } from 'services/routes'

export const LoginForm = ({ LoC, RoO }) => {

  // form hook
  const {
    register,
    formState: { errors },
    handleSubmit,
    trigger,
    setError,
  } = useForm()
  
  // show password
  const [show, setshow] = useState(false)
  const handleShow = () => setshow(!show)

  // form validation
  const registerOptions = {
    email: {
      required: 'campo requerido',
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'formato de correo no válido',
      },
    },
    password: {
      required: 'campo requerido',
    },
  }
  // handle submit
  const toast = useToast()
  const history = useHistory()
  const [loading, setloading] = useState(false)
  const onSubmit = async (e) => {
    const result = await authAPI.login(e)
    if (!result.success) {
      const serverError = { type: 'server', message: result.message }
      setError('email', serverError)
      setError('password', serverError)
    }
    if (result.success) {
      toast({
        title: 'Login exitoso',
        description: "",
        status: "success",
        duration: 5000,
        isClosable: true,
      })
      setloading(false)
      setTimeout( () => history.push(paths.home), 2000)
    }
  }

  return (
    <>
      <Heading> Login </Heading>

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

          {/* 🔥 Forgot pass  */}
          <HStack justifyContent="flex-end" my={2}>
            <Button variant="link">
              <Link to={paths.forgot}> olvidé mi contraseña </Link>
            </Button>
          </HStack>

          {/* 🔥 submit */}
          <Button type="submit" w="full" isLoading={loading}>
            Login
          </Button>
        </form>
      </Box>
    </>
  )
}
