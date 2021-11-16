// components
import { Card } from 'components/ui/Card'
import { BackButton } from 'components/ui/Button/Back'
import { PerfilCard } from 'components/ui/Avatar/Perfil'
import { AreaStackComp } from 'components/ui/Charts/Area-stack-comp'
import { Heading, Button, HStack, VStack, Divider } from '@chakra-ui/react'
// hooks
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
// data
import { rankingAPI } from 'services/api'

export const Compare = () => {
  // ❌ ESTA DATA ES DUMMY MIENTRAS SE RESUELVE LA LLAMADA A LA API
  const ME = {
    id: '6',
    username: 'Jorge',
  }
  const OTHER = {
    id: '1',
    username: 'Fran',
  }
  const COMPARATIVE = [
    {
      date: 'Enero',
      me: 350,
      compared_user: 300,
    },
    {
      date: 'Febrero',
      me: 300,
      compared_user: 139,
    },
    {
      date: 'Marzo',
      me: 200,
      compared_user: 450,
    },
    {
      date: 'Abril',
      me: 278,
      compared_user: 390,
    },
    {
      date: 'Mayo',
      me: 189,
      compared_user: 480,
    },
  ]

  // ❌ USESTATE NOT UPDATING
  const { id } = useParams()
  const context = 'me'
  const [my, setmy] = useState(ME)
  const [your, setyour] = useState(OTHER)
  const [result, setresult] = useState(COMPARATIVE)
  useEffect(() => {
    ;(async () => {
      const mine = await rankingAPI.user(id)
      const yours = await rankingAPI.user(context)
      const comparative = await rankingAPI.comparative(id, context)
    })()
  }, [])

  return (
    <>
      <BackButton />
      <Heading size="md"> Comparativa con: {your.username} </Heading>

        <Card my={3} py={4} flexDir='row' justifyContent='center'>
          <PerfilCard name={your.username} />
          <Divider orientation='vertical' mx={3} color='red' />
          <PerfilCard name={my.username} />
        </Card>

      <Card p="3">
        <AreaStackComp
          data={COMPARATIVE}
          me={ME.username}
          other={OTHER.username}
        />
      </Card>

      <VStack>
        <Button colorScheme="secondary"> Rango fechas </Button>
        <Button colorScheme="secondary"> Día / Semana / Mes / Año </Button>
      </VStack>
    </>
  )
}
