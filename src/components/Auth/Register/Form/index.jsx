// components
import { Heading, Box, VStack, Input, Button } from '@chakra-ui/react'
// import { Card } from 'components/ui/Card'
// import { Modal } from 'components/ui/Modal'
import { InputEmail } from 'components/ui/Input/Email'
import { InputPass } from 'components/ui/Input/Password'
import { InputText } from 'components/ui/Input/Text'
import { SubmitBtn } from 'components/ui/Button/Submit'
// import { PassValidator } from 'components/ui/Input/Password/Validator'
// import { RegisterTYP } from 'components/Auth/Register/TYP'
// hooks
// import { useState } from 'react'
import { useForm } from 'react-hook-form'
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
  } = useForm()

  // ✅ input
  // const form = { email: '', password: '', username: '' }
  // const [info, setinfo] = useState(form)

  // ❌ error handler
  // const errors = { email: '', password: '' , username: ''}
  // const [error, seterror] = useState(errors)

  // ❌ Pasword --> refactor
  // const valPass = {
  //   upper: new RegExp(/(?=.*?[A-Z])/),
  //   lower: new RegExp(/(?=.*?[a-z])/),
  //   digit: new RegExp(/(?=.*?[0-9])/),
  //   special: new RegExp(/(?=.*?[#?!@$%^&*-])/),
  //   length: new RegExp(/.{8,}$/),
  // }
  // const valEmail = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
  // //
  // const [upper, setupper] = useState({ message: 'Letras mayúsculas', valid: false,})
  // const [digit, setdigit] = useState({ message: 'Al menos un número', valid: false,})
  // const [special, setspecial] = useState({ message: 'Un caracter especial', valid: false,})
  // const [length, setlength] = useState({ message: '8 o más caracteres', valid: false,})
  // //
  // const value = {
  //   email: valEmail.test(info.email),
  //   upper: valPass.upper.test(info.password),
  //   digit: valPass.digit.test(info.password),
  //   special: valPass.special.test(info.password),
  //   length: valPass.length.test(info.password),
  // }
  // const fn = (fn, bool) => fn((curr) => ({ ...curr, valid: bool }))
  // const validatedPass = () => {
  //   value.upper ? fn(setupper, true) : fn(setupper, false )
  //   value.digit ? fn(setdigit, true) : fn(setdigit, false )
  //   value.special ? fn(setspecial, true) : fn(setspecial, false )
  //   value.length ? fn(setlength, true) : fn(setlength, false )
  // }

  // ✅ inputs
  // const handleInput = (e) => {
    // setinfo((curr) => ({ ...curr, [e.target.name]: e.target.value }))
    // validatedPass()
  // }

  // ✅ validate form
  // const isValid = info.email && info.password && info.username
  // const isValid = !errors ? true : false  

  // ✅ submit
  const onSubmit = async (e) => {
    console.info(e)
    console.info(errors)
    // e.preventDefault()
    // console.info(info)
    const { data } = await authAPI.register(e)
    console.info('> retrieved data: ', data)
    // if (data) RoC()
    // if(!data) seterror('delete')
  }

  return (
    <>
      <Heading> Registro </Heading>

      <Box my={4}>
        <VStack>
        <form onSubmit={handleSubmit(onSubmit)}>

          {/* 🔥 email */}
          <label> email </label> 
          <Input 
            {...register('email', {
              required: 'campo requerido',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'formato de correo no válido'
              }
            })}
            onKeyUp={() => trigger('email')}
            isInvalid={ errors.email ? true : false }
            errorBorderColor={ errors.email ? "red.500" : 'none' }
            />
          { errors.email && ( <small> { errors.email.message } </small> )}
          
          {/* 🔥 username */}
          <label> username </label> 
          <Input 
            type='text'
            {...register('username', {
              required: 'campo obligatorio',
            })}
            onKeyUp={() => trigger('username')}
            isInvalid={ errors.username ? true : false }
            errorBorderColor={ errors.username ? "red.500" : 'none' }
            />
            { errors.username && ( <small> { errors.username.message } </small> )}

          {/* 🔥 password */}
          <label> password </label> 
          <Input 
            type='text'
            {...register('password', {
              required: 'campo requerido',
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?^&]).{8,}$/,
                message: 'Al menos 8 caracteres, una minúscula, una mayúscula, un número, y un caracter especial',
              },
            })}
            onKeyUp={() => trigger('password')}
            isInvalid={ errors.password ? true : false }
            errorBorderColor={ errors.password ? "red.500" : 'none' }
            />
            { errors.password && ( <small> { errors.password.message } </small> )}


          <Button
            type='submit'
            isDisabled={ !errors ? true : false }
          > Registrar
            </Button> 

          {/* <InputEmail 
            handleInput={handleInput} 
            info={info} 
            />
          <InputText
            // handleInput={handleInput}
            // info={info}
            // name="username"
            // placeholder="username"
            // type="text"
          />
          <InputPass
            // handleInput={handleInput}
            // info={info}
          /> */}

          {/* REFATOR ////////////////////////////////  */}
          {/* <Card bg='red.100'>
          <PassValidator valid={upper.valid} value={upper.message} error={error.email}/>
          <PassValidator valid={digit.valid} value={digit.message} />
          <PassValidator valid={special.valid} value={special.message} />
          <PassValidator valid={length.valid} value={length.message} />
          </Card> */}

          {/* <SubmitBtn 
            isValid={isValid} 
            name="Registro" 
            /> */}
        </form>
        </VStack>
      </Box>
    </>
  )
}
