// componentes
import { RankingFilter } from 'components/App/Ranking/Filter'
import { RankingCard } from 'components/ui/Avatar/Ranking'
import { Card } from 'components/ui/Card'
import { Text } from '@chakra-ui/react'
// hooks
import { useState, useEffect } from 'react'
// data
import { rankingAPI } from 'services/api'
import { Link } from 'react-router-dom'
import { paths } from 'services/routes'

export const RankingTable = () => {
  
  // ❌ 'SEARCHBOX' como término de búsqueda
  // ❌ 'FILTROS DE CP
  const [filter, setfilter] = useState('')
  const [users, setusers] = useState([])
  useEffect(() => {
    ;(async () => {
      const data = await rankingAPI.users()
      setusers(data)
    })()
  }, [])


  return (
    <>
      <RankingFilter filter={filter} setfilter={setfilter} />

      {users.map((e) => {
        return (
          <>
          <Link to={{
            pathname: `${paths.ranking}/${e.id}`
          }}
            key={e.id}
            >
            <Card
              px={2}
              py={4}
              my={3}
              key={e.id}
              flexDirection="row"
              bg={e.id <= 3 ? 'yellow.50' : 'white'}
              border={e.id <= 3 ? '1px solid ' : ''}
              borderColor={e.id <= 3 ? 'yellow.500' : 'white'}
              >
              <Text fontSize="xs"> {e.id} </Text>
              <RankingCard name={e.username} />
              <Text textAlign="end" fontSize="xs" color="gray.500">
                {e.address.zipcode}
              </Text>
              <Text textAlign="end" fontSize="xs" color="gray.500">
                {e.address.number} <small> Kg/CO2 </small>
              </Text>
            </Card>
            </Link>
          </>
        )
      })}
    </>
  )
}
