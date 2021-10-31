import { Heading, Button, Input } from '@chakra-ui/react'

export const Reset = () => {
  return (
    <>
      <Heading> Reset password </Heading>

      <form action="">
        <Input placeholder="password" />
        <Input placeholder="repeat password" />
        <Button type="submit"> Send </Button>
      </form>
    </>
  )
}
