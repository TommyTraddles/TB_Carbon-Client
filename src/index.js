import React from 'react'
import ReactDOM from 'react-dom'

// style
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from 'theme/theme'
import 'theme/styles.css'

// routing
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { routes } from 'services/routes'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Router>
        <Switch>
          {routes.map((e, i) => (
            <Route {...e} exact />
          ))}
          <Redirect to='/1'/>
        </Switch>
      </Router>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
