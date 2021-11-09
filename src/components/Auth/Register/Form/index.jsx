// components
import { Heading, Box } from '@chakra-ui/react'
import { InputEmail } from 'components/ui/Input/Email'
import { InputPass } from 'components/ui/Input/Password'
import { SubmitBtn } from 'components/ui/Button/Submit'
import { PassValidator } from 'components/ui/Input/Password/Validator'
import { Card } from 'components/ui/Card'
// hooks
import { useState } from 'react'
// data
import { valPass, valEmail } from 'services/utils/regEx'

export const RegisterForm = () => {
  // input
  const form = { email: '', password: '' }
  const [info, setinfo] = useState(form)

  // 🤟 Pasword //////////////////// REFACTOR
  const [upper, setupper] = useState({ message: 'Letras mayúsculas', valid: false,})
  const [lower, setlower] = useState({ message: 'Letras minúsculas', valid: false,})
  const [digit, setdigit] = useState({ message: 'Al menos un número', valid: false,})
  const [special, setspecial] = useState({ message: 'Un caracter especial', valid: false,})
  const [length, setlength] = useState({ message: '8 o más caracteres', valid: false,})
  // 
  const value = {
    email: valEmail.test(info.email),
    upper: valPass.upper.test(info.password), 
    lower: valPass.lower.test(info.password),
    digit: valPass.digit.test(info.password),
    special: valPass.special.test(info.password),
    length: valPass.length.test(info.password),
  }
  const fn = (fn, bool) => fn((curr) => ({ ...curr, valid: bool }))
  const validatedPass = () => {
    value.upper ? fn(setupper, true) : fn(setupper, false )
    value.lower ? fn(setlower, true) : fn(setlower, false )
    value.digit ? fn(setdigit, true) : fn(setdigit, false )
    value.special ? fn(setspecial, true) : fn(setspecial, false )
    value.length ? fn(setlength, true) : fn(setlength, false )
  }
  // 🤟 Pasword //////////////////// REFACTOR
  
  // inputs
  const handleInput = (e) => {
    setinfo((curr) => ({ ...curr, [e.target.name]: e.target.value }))
    validatedPass()
  }
  // not empty
  const isValid = value.email && value.upper && value.lower && value.digit && value.special && value.length

  // submit
  const handleSubmit = (e) => {
    e.preventDefault()
    console.info(info)
  }

  return (
    <>
      <Heading> Registro </Heading>

      <Box my={4}>
        <form method="POST" onSubmit={handleSubmit}>
          <InputEmail handleInput={handleInput} info={info} />
          <InputPass handleInput={handleInput} info={info} />

          <Card bg='red.100'>
          <PassValidator valid={upper.valid} value={upper.message} />
          <PassValidator valid={lower.valid} value={lower.message} />
          <PassValidator valid={digit.valid} value={digit.message} />
          <PassValidator valid={special.valid} value={special.message} />
          <PassValidator valid={length.valid} value={length.message} />
          </Card>

          <SubmitBtn isValid={isValid} name="Registro" />
        </form>
      </Box>
    </>
  )
}