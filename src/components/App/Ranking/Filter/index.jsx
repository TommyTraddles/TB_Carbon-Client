import { InputGroup, Input, InputRightElement } from '@chakra-ui/react'
import { BsSearch } from 'react-icons/bs'

export const GlobalFilter = ({ filter, setfilter }) => {
  return (
    <>
      <InputGroup>
        <Input
          placeholder="Buscar"
          value={filter || ''}
          onChange={(e) => setfilter(e.target.value)}
        />
        <InputRightElement children={<BsSearch color="green.500" />} />
      </InputGroup>
    </>
  )
}