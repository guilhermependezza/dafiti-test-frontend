// Default imports
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Routes components
import OrderHistory from './OrderHistory';
import User from './User';

function Main() {
  return (
    <Switch>
        <Route exact path="/" component={User} />
        <Route exact path="/order-history" component={OrderHistory} />
    </Switch>
  );
}

export default Main