import { Button } from '@chakra-ui/react'

export const SubmitBtn = ({ isValid, name }) => {
  return (
    <>
      <Button my={2} w="full" type="submit" isDisabled={isValid ? false : true}>
        {name}
      </Button>
    </>
  )
}
