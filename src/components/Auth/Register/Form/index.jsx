// components
import { Heading, Box } from '@chakra-ui/react'
import { InputEmail } from 'components/ui/Input/Email'
import { InputPass } from 'components/ui/Input/Password'
import { SubmitBtn } from 'components/ui/Button/Submit'
import { PassValidator } from 'components/ui/Input/Password/Validator'
// hooks
import { useState } from 'react'



export const RegisterForm = () => {

  // 🔥 VALUES
  const passError = [
    {message: "Letras mayúsculas", valid: false},
    {message: "Letras minúsculas", valid: false},
    {message: "Al menos un número", valid: false},
    {message: "Un caracter especial", valid: false},
    {message: "8 o más caracteres", valid: false},
  ]
  // const [paserror, setpaserror] = useState(passError)

  // 🔥 REGEX
  const validUpper = new RegExp("(?=.*?[A-Z])")
  const validLower = new RegExp("(?=.*?[a-z])")
  const valiDigit = new RegExp("(?=.*?[0-9])")
  const valiSpecial = new RegExp("(?=.*?[#?!@$%^&*-])")
  const validMinLength = new RegExp(".{8,}$")

  // inputs
  const form = { email: '', password: '' }
  const [info, setinfo] = useState(form)
  const handleInput = (e) => {
    setinfo((curr) => ({ ...curr, [e.target.name]: e.target.value }))

    if(!validUpper.test(info.password)) console.info(' one Upper')
    if(!validLower.test(info.password)) console.info(' one Lower')
    if(!valiDigit.test(info.password)) console.info(' one Digit')
    if(!valiSpecial.test(info.password)) console.info(' one Special')
    if(!validMinLength.test(info.password)) console.info(' min Length')
  }

  // not empty
  const isValid = info.email !== '' && info.password !== ''
  // pass

  // email 
  // const validFormat = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
  // const validEmail = () => {
  //   if(!validFormat.test(info.email)) console.info(' valid mail')
  // }

  // submit
  const handleSubmit = (e) => {
    e.preventDefault()
    console.info(info)
  }
  // state
  // const valid = true


  return (
    <>
      <Heading> Registro </Heading>

      <Box my={4}>
        <form method="POST" onSubmit={handleSubmit}>
          <InputEmail handleInput={handleInput} info={info}/>
          <InputPass handleInput={handleInput} info={info}/>

          <PassValidator valid={passError[0].valid} value={passError[0].message}/>
          <PassValidator valid={passError[1].valid} value={passError[1].message}/>
          <PassValidator valid={passError[2].valid} value={passError[2].message}/>
          <PassValidator valid={passError[3].valid} value={passError[3].message}/>

          <SubmitBtn isValid={isValid} name="Registro" />
        </form>
      </Box>
    </>
  )
}
