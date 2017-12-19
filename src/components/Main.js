// Default imports
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Routes components
import OrderHistory from './OrderHistory';
import User from './User';
import AddressList from './AddressList';
import Wishlist from './Wishlist.js';

function Main() {
  return (
    <Switch>
        <Route exact path="/" component={User} />
        <Route exact path="/order-history/:userId" component={OrderHistory} />
        <Route exact path="/address-list/:userId" component={AddressList} />
        <Route exact path="/wishlist/:userId" component={Wishlist} />
    </Switch>
  );
}

export default Main