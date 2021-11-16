// components 
import { BackButton } from 'components/ui/Button/Back'
// hooks
import { useParams } from 'react-router-dom'

export const Compare = () => {

  const { id } = useParams()
  console.info(id)

  // fetch data por ID
  // comparar

  return (
    <>
      <BackButton />
      Hello
    </>
  )
}
