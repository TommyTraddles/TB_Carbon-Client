// componentes
import { Table, Thead, Tbody, Tr, Td, Text } from '@chakra-ui/react'
import { PerfilCard } from 'components/User/Perfil/Avatar'
import { Avatar, HStack} from '@chakra-ui/react'
// hooks
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from 'react-table'
import { useMemo } from 'react'
// data
import { Link } from 'react-router-dom'
import { paths } from 'services/routes'

// .......

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

// .......

export const RankingTable = () => {
  // table
  const DATA = [
    {
      Id: '1',
      ranking: '1',
      username: 'Pablo ',
      zipcode: '28000',
      carbon: '20',
    },
    {
      Id: '2',
      ranking: '2',
      username: 'Elena ',
      zipcode: '28000',
      carbon: '20',
    },
    {
      Id: '3',
      ranking: '3',
      username: 'Maria ',
      zipcode: '27000',
      carbon: '20',
    },
    {
      Id: '4',
      ranking: '4',
      username: 'Juan ',
      zipcode: '26000',
      carbon: '20',
    },
    {
      Id: '5',
      ranking: '5',
      username: 'Pablo ',
      zipcode: '28000',
      carbon: '20',
    },
    {
      Id: '6',
      ranking: '6',
      username: 'Elena ',
      zipcode: '28000',
      carbon: '20',
    },
    {
      Id: '7',
      ranking: '7',
      username: 'Maria ',
      zipcode: '27000',
      carbon: '20',
    },
    {
      Id: '8',
      ranking: '8',
      username: 'Juan ',
      zipcode: '26000',
      carbon: '20',
    },
    {
      Id: '9',
      ranking: '9',
      username: 'Pablo ',
      zipcode: '28000',
      carbon: '20',
    },
    {
      Id: '10',
      ranking: '10',
      username: 'Elena ',
      zipcode: '28000',
      carbon: '20',
    },
    {
      Id: '11',
      ranking: '11',
      username: 'Maria ',
      zipcode: '27000',
      carbon: '20',
    },
    {
      Id: '4',
      ranking: '4',
      username: 'Juan ',
      zipcode: '26000',
      carbon: '20',
    },
    {
      Id: '5',
      ranking: '5',
      username: 'Pablo ',
      zipcode: '28000',
      carbon: '20',
    },
    {
      Id: '6',
      ranking: '6',
      username: 'Elena ',
      zipcode: '28000',
      carbon: '20',
    },
    {
      Id: '7',
      ranking: '7',
      username: 'Maria ',
      zipcode: '27000',
      carbon: '20',
    },
    {
      Id: '8',
      ranking: '8',
      username: 'Juan ',
      zipcode: '26000',
      carbon: '20',
    },
    {
      Id: '1',
      ranking: '1',
      username: 'Pablo ',
      zipcode: '28000',
      carbon: '20',
    },
    {
      Id: '2',
      ranking: '2',
      username: 'Elena ',
      zipcode: '28000',
      carbon: '20',
    },
    {
      Id: '3',
      ranking: '3',
      username: 'Maria ',
      zipcode: '27000',
      carbon: '20',
    },
    {
      Id: '4',
      ranking: '4',
      username: 'Juan ',
      zipcode: '26000',
      carbon: '20',
    },
    {
      Id: '5',
      ranking: '5',
      username: 'Pablo ',
      zipcode: '28000',
      carbon: '20',
    },
    {
      Id: '6',
      ranking: '6',
      username: 'Elena ',
      zipcode: '28000',
      carbon: '20',
    },
    {
      Id: '7',
      ranking: '7',
      username: 'Maria ',
      zipcode: '27000',
      carbon: '20',
    },
    {
      Id: '8',
      ranking: '8',
      username: 'Juan ',
      zipcode: '26000',
      carbon: '20',
    },
  ]
  const COLUMNS = [
    { width: '10%', Header: 'Ranking', accessor: 'ranking' },
    { width: '60%', Header: 'Usuario', accessor: 'username' },
    { width: '15%', Header: 'Codigo Postal', accessor: 'zipcode' },
    { width: '15%', Header: 'Carbon', accessor: 'carbon' },
  ]
  const data = useMemo(() => DATA, [])
  const columns = useMemo(() => COLUMNS, [])
  const {
    // render and sort
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows,
    // filter
    state,
    setGlobalFilter,
  } = useTable({ columns, data }, useGlobalFilter, useSortBy, usePagination)
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
              <Link to={paths.compare}>
                <Tr
                  {...row.getRowProps()}
                  display="flex"
                  my={3}
                  py={3}
                  px={5}
                  bg={row.original.ranking < 4 ? 'green.50' : 'white'}
                  borderRadius="xl"
                  boxShadow="xl"
                >
                  {row.cells.map((cell) => {
                    return (
                      <Td p={1} h='70px' w={cell.column.width} {...cell.getCellProps()}>
                        {cell.column.Header === 'Ranking' && (
                          <Text fontSize="xs">{cell.render('Cell')}</Text>
                          )}
                        {cell.column.Header === 'Usuario' && (
                          <Text fontWeight='bold'> @{cell.render('Cell')}</Text>
                        )}
                        {cell.column.Header === 'Codigo Postal' && (
                          <Text textAlign="end" fontSize="xs" color='gray.500' >
                            {cell.render('Cell')}
                          </Text>
                        )}
                        {cell.column.Header === 'Carbon' && (
                          <Text textAlign="end" fontSize="xs" color='gray.500'>
                            {cell.render('Cell')}
                          </Text>
                        )}
                      </Td>
                    )
                  })}
                </Tr>
              </Link>
            )
          })}
        </Tbody>
      </Table>
    </>
  )
}
