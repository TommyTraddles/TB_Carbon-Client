import { IconButton } from '@chakra-ui/react'
import { IoMdArrowBack } from 'react-icons/io'
import { Link } from 'react-router-dom'

export const BackButton = ({ to }) => {
  return (
    <>
      <Link to={to}>
        <IconButton variant="outline" icon={<IoMdArrowBack />} />
      </Link>
    </>
  )
}
