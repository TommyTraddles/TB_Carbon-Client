import {
  FormControl,
  FormLabel,
  // FormHelperText,
  Box,
  VStack,
  HStack,
  InputGroup,
  InputRightElement,
  Heading,
  Button,
  IconButton,
  Input,
  Text,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { paths } from 'services/routes'
// icons
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

// hooks
import { useState } from 'react'

export const LoginModal = () => {
  // 👁 DUMMY FOR TESTING
  // obj
  const form = { email: '', password: '' }
  // inputs
  const [info, setinfo] = useState(form)
  const handleInput = (e) =>
    setinfo((curr) => ({ ...curr, [e.target.name]: e.target.value }))
  // pass
  const [show, setshow] = useState(false)
  const handleShow = () => setshow(!show)
  // form
  const handleSubmit = (e) => {
    e.preventDefault()
    console.info('hello')
  }
  const isValid =
    info.email !== '' && info.address !== '' && info.password !== ''

  return (
    <>
      <Heading> Login </Heading>

      <Box my={4}>
        <form form method="POST" onSubmit={handleSubmit}>
          <FormControl my={2}>
            <FormLabel> Email </FormLabel>
            <Input
              name="email"
              type="email"
              placeholder="email"
              onChange={handleInput}
              value={info.email}
            />
            {/* <FormHelperText> Helper text </FormHelperText> */}
          </FormControl>

          <FormControl my={2}>
            <FormLabel> Password </FormLabel>
            <InputGroup>
              <Input
                name="password"
                placeholder="password"
                type={show ? 'text' : 'password'}
                onChange={handleInput}
                value={info.password}
              />
              <InputRightElement>
                <IconButton
                  variant="ghost"
                  onClick={handleShow}
                  icon={show ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                />
              </InputRightElement>
            </InputGroup>
            {/* <FormHelperText> Helper text </FormHelperText> */}
          </FormControl>

          <Button
            my={2}
            w="full"
            type="submit"
            isDisabled={isValid ? false : true}
          >
            {' '}
            Login
          </Button>
        </form>
      </Box>

      <VStack my={2}>
        <Text> - OR -</Text>
        <Button colorScheme="secondary">Signup with Google</Button>
      </VStack>

      <VStack my={2}>
        <Button variant="link">
          <Link to={paths.forgot}> forgot password </Link>
        </Button>
      </VStack>

      <VStack my={2}>
        <HStack>
          <Text> Don't have an account? </Text>
          <Button variant="link">
            <Link to={paths.register}> register </Link>
          </Button>
        </HStack>
      </VStack>
    </>
  )
}
