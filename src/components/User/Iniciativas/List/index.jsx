// components
import { Heading, VStack, Button } from '@chakra-ui/react'
// import { Radio, RadioGroup } from '@chakra-ui/react'
import { Card } from 'components/ui/Card'
// data
import { Link } from 'react-router-dom'
import { paths } from 'services/routes'
// hooks
// import { useState } from 'react'
// import { useDisclosure } from '@chakra-ui/hooks'

export const IniciativasList = () => {
  // radio
  // const [radio, setradio] = useState(null)
  // modal
  // const { isOpen: IiO, onOpen: IoO, onClose: IoC } = useDisclosure()

  return (
    <>
      <VStack>
        <Card bg="red.100" w="full">
          <Heading size="sm">Listado de iniciativas</Heading>
          {/* <RadioGroup onChange={setradio} value={radio} defaultValue='one'>
            <VStack>
              <Radio name="one" value="one"> one </Radio>
              <Radio name="two" value="two"> two </Radio>
              <Radio name="three" value="three"> three </Radio>
            </VStack>
          </RadioGroup> */}
          <Button>
            <Link to={paths.planes}> ver planes </Link>
          </Button>
        </Card>
      </VStack>
    </>
  )
}
