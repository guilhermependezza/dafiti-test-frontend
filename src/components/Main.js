// Default imports
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Routes components
import OrderHistory from './OrderHistory/index';
import User from './User/index';
import AddressList from './AddressList/index';
import Wishlist from './Wishlist/index';

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