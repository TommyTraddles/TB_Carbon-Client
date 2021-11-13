import { HStack, Button } from '@chakra-ui/react'

export const SSO = () => {
  return (
    <>
      <HStack my={2}>
        <Button colorScheme="facebook" w="full" variant="outline">
          Facebook
        </Button>
        <Button colorScheme="gray" w="full" variant="outline">
          Google
        </Button>
        <Button colorScheme="gray" w="full" variant="outline">
          Apple
        </Button>
      </HStack>
    </>
  )
}
