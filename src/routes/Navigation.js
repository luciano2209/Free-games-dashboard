import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import routes from './routes'
import { map } from 'lodash'

const Navigation = () => {
  return (
    <Router>
      <Switch>
        {map(routes, (r,index) => (
          <Route
            key={index}
            path={r.path}
            exact={r.exact}
            render={(props) => (
              <r.layout>
                <r.component {...props} />
              </r.layout>
            ) }
          />
        ))}
      </Switch>
    </Router>
  )
}

export default Navigation
