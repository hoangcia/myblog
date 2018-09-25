import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';

import { Home, About } from '../';

const App = (props) => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About}/>

    </Switch>
  )
}

export default withRouter(App);
