import { Heading, Stack, VStack } from '@chakra-ui/react'
import { BackButton } from 'components/ui/Button/Back'
import { RadioCard } from 'components/ui/Radio'
import { SubmitBtn } from 'components/ui/Button/Submit'
import { Card } from 'components/ui/Card'
// import { Success } from 'components/Subscription/Success'
// import { Error } from 'components/Subscription/Error'
// hooks
import { useRadioGroup } from '@chakra-ui/radio'
import { useState } from 'react'

export const Subscription = () => {
  // card
  const options = ['free', 'one-time payment', 'monthly']
  const [plan, setplan] = useState(options[0])
  const handleChange = (e) => setplan(e)
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'subscription', defaultValue: plan, onChange: handleChange,
  })
  const group = getRootProps()
  // submit
  const handleSubmit = (e) => {
    e.preventDefault()
    console.info(plan)
  }
  const isValid = true

  return (
    <>
      <BackButton />
      <Heading> Subscription </Heading>

      <Stack>
        <VStack {...group} >
          {options.map((value) => {
            const radio = getRadioProps({ value })
            return (
              <RadioCard key={value} {...radio}>
                {value}
              </RadioCard>
            )
          })}
        </VStack>
        <form method="POST" onSubmit={handleSubmit}>
          <SubmitBtn isValid={isValid} name="Buy" />
        </form>
      </Stack>
    </>
  )
}
