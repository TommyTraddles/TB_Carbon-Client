import { FormControl, FormLabel, Input, FormHelperText } from "@chakra-ui/react"

export const inputText = ({ type, name, handleInput, info, error }) => {
  return (
    <>
      <FormControl my={2}>
        <FormLabel> Email </FormLabel>
        <Input
          name={name}
          type={type}
          placeholder={name}
          onChange={handleInput}
          value={info.email}
        />
         { error ? <FormHelperText color='red.400'> Helper text </FormHelperText> : ''}
      </FormControl>
    </>
  )
}
