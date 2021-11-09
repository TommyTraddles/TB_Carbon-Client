// components
import { Heading, Box } from '@chakra-ui/react'
import { InputEmail } from 'components/ui/Input/Email'
import { InputPass } from 'components/ui/Input/Password'
import { SubmitBtn } from 'components/ui/Button/Submit'
import { PassValidator } from 'components/ui/Input/Password/Validator'
// hooks
import { useState } from 'react'

export const RegisterForm = () => {
  // input
  const form = { email: '', password: '' }
  const [info, setinfo] = useState(form)

  // 🔥 VALUES
  const passError = [
    { name: 'upper', values: { message: 'Letras mayúsculas', valid: false } },
    { name: 'lower', values: { message: 'Letras minúsculas', valid: false } },
    { name: 'digit', values: { message: 'Al menos un número', valid: false } },
    { name: 'special', values: { message: 'Un caracter especial', valid: false }, },
    { name: 'length', values: { message: '8 o más caracteres', valid: false } },
  ]
  const [passerror, setpasserror] = useState(passError)

  // 🔥 REGEX
  const validPass = {
    upper: new RegExp('(?=.*?[A-Z])'),
    lower: new RegExp('(?=.*?[a-z])'),
    digit: new RegExp('(?=.*?[0-9])'),
    special: new RegExp('(?=.*?[#?!@$%^&*-])'),
    length: new RegExp('.{8,}$'),
  }

  // inputs
  const handleInput = (e) => {
    setinfo((curr) => ({ ...curr, [e.target.name]: e.target.value }))
    // render menssage
    const validation = (a) =>
      passerror.filter((o) => o.name === a)[0].values.message
    if (validPass.upper.test(info.password)) console.info(validation('upper'))
  }

  // not empty
  const isValid = info.email !== '' && info.password !== ''

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

          {passerror.map((o, i) => (
            <PassValidator
              key={i}
              valid={o.values.valid}
              value={o.values.message}
            />
          ))}

          <SubmitBtn isValid={isValid} name="Registro" />
        </form>
      </Box>
    </>
  )
}

// email
// const validFormat = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
// const validEmail = () => {
//   if(!validFormat.test(info.email)) console.info(' valid mail')
// }
