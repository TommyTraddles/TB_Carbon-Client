import { Navbar } from 'components/Navbar'
import { Switch, Route } from 'react-router-dom'
import { routes } from 'services/routes'

export const Private = () => {
  return (
    <>
        <Switch>
          {routes.map((e, i) => {
            if(e.layout === 'private'){
              return(<Route {...e} exact />)
            }
          })}
        </Switch>
        <Navbar />
    </>
  )
}
