// components
import { Navbar } from 'components/Navbar'
import { Container, Box } from '@chakra-ui/react'

// routing
import { Switch, Route } from 'react-router-dom'
import { routes } from 'services/routes'

export const Private = () => {
  return (
    <>
      <Container maxW="container.sm" p={2}>
        <Switch>
          {routes.map((e, i) => {
            if (e.layout === 'private') return <Route key={i} {...e} exact />
            return ''
          })}
        </Switch>
        <Box>
          <Navbar />
        </Box>
      </Container>
    </>
  )
}
