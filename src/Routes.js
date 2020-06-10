import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import App from './App'
import Market from './app/pages/market'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <App />
        </Route>

        <Route path="/market" exact>
          <Market />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}