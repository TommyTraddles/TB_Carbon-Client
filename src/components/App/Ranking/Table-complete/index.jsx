// componentes
import { Table, Thead, Tbody, Tr, Td, Text, HStack } from '@chakra-ui/react'
import { GlobalFilter } from 'components/App/Ranking/Filter'
import { RankingCard } from 'components/ui/Avatar/Ranking'
// hooks
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from 'react-table'
import { useMemo, useState, useEffect } from 'react'
import { useHistory } from 'react-router'
// data
import { paths } from 'services/routes'
import { rankingAPI } from 'services/api'

export const RankingTable = () => {
  // ❌ 'SETUSERS' NO CARGA INMEDIATAMENTE
  const [users, setusers] = useState()
  useEffect(() => {
    (async () => {
      const data = await rankingAPI.users()
      setusers(data)
      console.info('> DATA', data)
      console.info('> USERS: ', users)
    })()
  }, [])

  // ❌ ESTA DATA ES DUMMY MIENTRAS SE RESUELVE LA LLAMADA A LA API
  const DATA = [
    {
      id: '1',
      username: 'Fran ',
      address: { zipcode: '28000', number: '200' },
    },
    {
      id: '2',
      username: 'Reyes ',
      address: { zipcode: '27000', number: '242' },
    },
    { id: '3', username: 'Juan', address: { zipcode: '27000', number: '212' } },
    { id: '4', username: 'Kike', address: { zipcode: '27000', number: '310' } },
    {
      id: '5',
      username: 'Borja',
      address: { zipcode: '27000', number: '122' },
    },
    {
      id: '6',
      username: 'Jorge',
      address: { zipcode: '27000', number: '350' },
    },
  ]
  // ❌ CAMBIAR 'ACCESSOR' POR DATO TRAIDO DE LA API
  const COLUMNS = [
    { width: '10%', Header: 'Ranking', accessor: 'id' },
    { width: '55%', Header: 'Usuario', accessor: 'username' },
    { width: '15%', Header: 'Codigo Postal', accessor: 'address.zipcode' },
    { width: '20%', Header: 'Carbon', accessor: 'address.number' },
  ]
  // ✅  handleClick
  const history = useHistory()
  const handleClick = (id) => history.push(`${paths.ranking}/${id}`)

  // table
  // ❌ ES NECESARIO PASAR 'DATA' PRIMERO MIENTRAS RESUELVO USESTATE
  const data = useMemo(() => DATA, [])
  const columns = useMemo(() => COLUMNS, [])
  const tableInstance = useTable(
    { columns, data },
    useGlobalFilter,
    useSortBy,
    usePagination
  )
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows,
    state,
    setGlobalFilter,
  } = tableInstance
  const { globalFilter } = state

  return (
    <>
      <GlobalFilter filter={globalFilter} setfilter={setGlobalFilter} />

      <Table {...getTableProps()} variant="unstyled">
        <Thead>
          {headerGroups.map((headerGroup) => (
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => {
                return ''
              })}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()} w="500px">
          {rows.map((row) => {
            prepareRow(row)
            return (
              <Tr
                {...row.getRowProps()}
                display="flex"
                my={3}
                py={2}
                px={3}
                // ❌ CAMBIAR '.ID' POR '.RANKING' EN LA BBDD FINAL
                border={row.original.id < 4 ? '2px solid' : ''}
                borderColor={row.original.id < 4 ? 'orange.200' : ''}
                bg='white'
                borderRadius="xl"
                boxShadow="xl"
                onClick={() => handleClick(row.original.id)}
              >
                {row.cells.map((cell) => {
                  return (
                    <Td p={1} w={cell.column.width} {...cell.getCellProps()}>
                      {/* ❌ MAQUETA */}
                      {cell.column.Header === 'Ranking' && (
                        <Text fontSize="xs">{cell.render('Cell')}</Text>
                      )}
                      {cell.column.Header === 'Usuario' && (
                        <HStack>
                          <RankingCard name={cell.render('Cell')} size="lg" />
                        </HStack>
                      )}
                      {cell.column.Header === 'Codigo Postal' && (
                        <Text textAlign="end" fontSize="xs" color="gray.500">
                          {cell.render('Cell')}
                        </Text>
                      )}
                      {cell.column.Header === 'Carbon' && (
                        <Text textAlign="end" fontSize="xs" color="gray.500">
                          {cell.render('Cell')} <small> Kg/CO2 </small>
                        </Text>
                      )}
                    </Td>
                  )
                })}
              </Tr>
            )
          })}
        </Tbody>
      </Table>
    </>
  )
}
