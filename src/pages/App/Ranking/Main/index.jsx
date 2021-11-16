// components
import {
  Heading,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
} from '@chakra-ui/react'
import { RankingTable } from 'components/App/Ranking/Table-complete'
import { RankingMap } from 'components/App/Ranking/Map'

export const Ranking = () => {
  return (
    <>
      <Heading> Ranking </Heading>

      <Tabs variant="solid-rounded">
        <TabList justifyContent='space-between' px={4}>
          <Tab w='48%' >Mapa</Tab>
          <Tab w='48%' >Ranking</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <RankingMap />
          </TabPanel>

          <TabPanel>
            <RankingTable />
          </TabPanel>
        </TabPanels>
      </Tabs>

      <br />
    </>
  )
}
