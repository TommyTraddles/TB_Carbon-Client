// componentes
import { Card } from 'components/ui/Card'
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react'
// hooks
import {
  useTable,
  useSortBy,
  useGlobalFilter,
} from 'react-table'
import { useMemo } from 'react'

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

export const RankingTable = () => {
  // table
  const DATA = [
    { Id: '1', ranking: '1', username: 'Pablo ', postal_code: '28000' },
    { Id: '2', ranking: '2', username: 'Elena ', postal_code: '28000' },
    { Id: '3', ranking: '3', username: 'Maria ', postal_code: '28000' },
  ]
  const COLUMNS = [
    { Header: 'Ranking', accessor: 'ranking' },
    { Header: 'Username', accessor: 'username' },
  ]
  const data = useMemo(() => DATA, [])
  const columns = useMemo(() => COLUMNS, [])
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable({ columns, data }, useGlobalFilter, useSortBy)
  const { globalFilter } = state

  return (
    <>
      <GlobalFilter filter={globalFilter} setfilter={setGlobalFilter} />

      <Card>
        <Table {...getTableProps()}>
          <Thead>
            {headerGroups.map((headerGroup) => (
              <Tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <Th {...column.getHeaderProps(column.getSortByToggleProps())} >
                    {column.render('Header')}
                    <span>
                  {column.isSorted ? column.isSortedDesc ? ' ⬇️' : ' ⬆️' : ' ↕️'}
                </span>
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>
          <Tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row)
              return (
                <Tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>
                    )
                  })}
                </Tr>
              )
            })}
          </Tbody>
        </Table>
      </Card>
    </>
  )
}