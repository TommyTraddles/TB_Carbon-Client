// components
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
} from '@chakra-ui/react'

export const NewInputEmail = ({ kw, title, placeholder, errors }) => {

  console.info(errors[kw])

  return (
    <>
          <FormControl my={2}>
            <FormLabel> Email </FormLabel>
            <Input
              type={title}
              placeholder={placeholder}
              isInvalid={errors[kw] ? true : false}
              errorBorderColor={errors[kw] ? 'red.500' : 'none'}
            />
            {errors.email && (
              <FormHelperText color="red.500">
                {errors[kw].message}
              </FormHelperText>
            )}
          </FormControl>
    </>
  )
}