import React from 'react'
import { Redirect, Route, Switch } from 'react-router'

import { Cookie, Home, Privacy } from 'pages'

export const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/cookie' component={Cookie} />
    <Route exact path='/privacy' component={Privacy} />
    <Redirect to='/' />
  </Switch>
)
