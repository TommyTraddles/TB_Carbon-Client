// components
import { Heading, VStack, HStack, Text, Box, Input } from '@chakra-ui/react'
import { Card } from 'components/ui/Card'
import { SubmitBtn } from 'components/ui/Button/Submit'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
// hooks
import { useState } from 'react'

export const IniciativasList = () => {
  // inputs
  const form = { amount: '' }
  const [info, setinfo] = useState(form)
  const handleInput = (e) =>
    setinfo((curr) => ({ ...curr, [e.target.name]: e.target.value }))
  const handleSubmit = (e) => {
    e.preventDefault()
    console.info(info)
  }
  // state
  const isValid = info.amount > 0

  return (
    <>
      <VStack>
        <Accordion allowToggle w="full">
          <Card bg="red.100" w="full" p={0}>
            <AccordionItem w="full" border="0">
              <h2>
                <AccordionButton p="0" pr={3}>
                  <HStack w="full" overflow="hidden">
                    <Box w={120} h={120} bg="red.700" />
                    <VStack pl={4} alignItems="flex-start">
                      <Heading size="sm"> Salvar el Amazonas </Heading>
                      <Text> ONG </Text>
                    </VStack>
                  </HStack>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <VStack>
                  <Text>Lorem ipsum</Text>

                  {/* Donation Form */}
                  <form method="POST" onSubmit={handleSubmit}>
                    <HStack>
                      <Input
                        type="number"
                        name="amount"
                        placeholder="15 EUR"
                        onChange={handleInput}
                        value={info.amount}
                      />
                      <SubmitBtn isValid={isValid} name="enviar donación" />
                    </HStack>
                  </form>
                </VStack>
              </AccordionPanel>
            </AccordionItem>
          </Card>
        </Accordion>
      </VStack>
    </>
  )
}
