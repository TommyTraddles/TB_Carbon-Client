// components
import { Link, HStack, Button } from '@chakra-ui/react'
// data
import { SSOpaths } from 'services/routes'

export const SSO = () => {
  return (
    <>
      <HStack my={2}>
        <Button colorScheme="gray" w="full" variant="outline">
          <Link href={SSOpaths.google} isExternal>
            Google
          </Link>
        </Button>
      </HStack>
    </>
  )
}
