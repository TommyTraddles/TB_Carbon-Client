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
import { useHistory, useLocation } from 'react-router-dom'
import { useToast } from '@chakra-ui/toast'
// data
import { authAPI } from 'services/api'
import { paths } from 'services/routes'

export const ResetForm = () => {
  // retrieve from URL QUERY
  const location = useLocation()
  const query = new URLSearchParams(location.search);
  const token = query.get('token') || '123'
  const email = query.get('email') || 'ill.better.be.off@gmail.com'

  // form hook
  const {
    register,
    formState: { errors },
    handleSubmit,
    trigger,
    getValues,
  } = useForm()

  // show password
  const [show, setshow] = useState(false)
  const handleShow = () => setshow(!show)

  // form validation
  const registerOptions = {
    pass: {
      required: 'campo obligatorio',
      pattern: {
        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?^&]).{8,}$/,
        message:
          'Al menos 8 caracteres, una minúscula, una mayúscula, un número, y un caracter especial',
      },
    },
    repeat: {
      required: 'campo obligatorio',
      validate: () => getValues("pass") === getValues("repeat") || 'Las contraseñas deben ser iguales'
    },
  }
  // handle submit
  const toast = useToast()
  const history = useHistory()
  const [loading, setloading] = useState(false)

  const onSubmit = async (e) => {
    const result = await authAPI.reset({ token, email }, e)
    if (!result.success) {
      if (result.message === 'Invalid token') {
        toast({
          title: 'Token inválido',
          description: '',
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
      }
    }
    if (result.success) {
      toast({
        title: 'Nueva contraseña guardada',
        description: '',
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
      setloading(false)
      setTimeout(() => history.push(paths.index), 2000)
    }
  }

  return (
    <>
      <Heading> Nueva contraseña </Heading>

      <Box my={4}>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* 🔥 password */}
          <FormControl my={2}>
            <FormLabel> Nueva contraseña </FormLabel>
            <InputGroup>
              <Input
                type={show ? 'text' : 'password'}
                placeholder="contraseña"
                {...register('pass', registerOptions.pass)}
                onKeyUp={() => trigger('pass')}
                isInvalid={errors.pass ? true : false}
                errorBorderColor={errors.pass ? 'red.500' : 'none'}
              />
              <InputRightElement>
                <IconButton
                  variant="ghost"
                  onClick={handleShow}
                  colorScheme={errors.pass ? 'red' : 'primary'}
                  icon={show ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                />
              </InputRightElement>
            </InputGroup>
            {errors.pass && (
              <FormHelperText color="red.500">
                {errors.pass.message}
              </FormHelperText>
            )}
          </FormControl>

          {/* 🔥 password */}
          <FormControl my={2}>
            <FormLabel> Repite contraseña </FormLabel>
            <InputGroup>
              <Input
                type={show ? 'text' : 'password'}
                placeholder="contraseña"
                {...register('repeat', registerOptions.repeat)}
                onKeyUp={() => trigger('password')}
                isInvalid={errors.repeat ? true : false}
                errorBorderColor={errors.repeat ? 'red.500' : 'none'}
              />
              <InputRightElement>
                <IconButton
                  variant="ghost"
                  onClick={handleShow}
                  colorScheme={errors.repeat ? 'red' : 'primary'}
                  icon={show ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                />
              </InputRightElement>
            </InputGroup>
            {errors.repeat && (
              <FormHelperText color="red.500">
                {errors.repeat.message}
              </FormHelperText>
            )}
          </FormControl>

          {/* 🔥 submit */}
          <Button type="submit" w="full" isLoading={loading}>
            Login
          </Button>
        </form>
      </Box>
    </>
  )
}
