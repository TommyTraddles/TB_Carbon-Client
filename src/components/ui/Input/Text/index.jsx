import { FormControl, FormLabel, Input, FormHelperText } from "@chakra-ui/react"

export const InputText = ({ type, name, handleInput, info, error }) => {
  return (
    <>
      <FormControl my={2}>
        <FormLabel> {name} </FormLabel>
        <Input
          name={name}
          type={type}
          placeholder={name}
          onChange={handleInput}
          value={info[name]}
        />
         { error ? <FormHelperText color='red.400'> Helper text </FormHelperText> : ''}
      </FormControl>
    </>
  )
}