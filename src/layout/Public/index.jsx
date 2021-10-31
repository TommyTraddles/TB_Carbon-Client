import { Switch, Route } from 'react-router-dom'
import { routes } from 'services/routes'

export const Public = () => {
  return (
    <>
        <Switch>
          {routes.map((e, i) => {
            if(e.layout === 'public'){
              return(<Route {...e} exact />)
            }
          })}
        </Switch>
    </>
  )
}
