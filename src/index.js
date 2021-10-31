import React from 'react'
import ReactDOM from 'react-dom'

// style
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from 'theme/theme'
import 'theme/styles.css'

// components
import { DEMO_LINKS } from 'components/_DEMO-LINKS'
import { Navbar } from 'components/Navbar'

// routing
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { routes } from 'services/routes'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Router>
        <DEMO_LINKS/>
        <Switch>
          {routes.map((e, i) => (
            <Route {...e} exact />
          ))}
          <Redirect to='/home'/>
        </Switch>
        <Navbar/>
      </Router>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
)