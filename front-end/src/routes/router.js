import { Redirect, Route, Switch } from 'react-router-dom';
import AccessPage from '../pages/AccessPage/AccessPage';
import ProductsPage from '../pages/ProductsPage/ProductsPage';
import CheckoutPage from '../pages/CheckoutPage/CheckoutPage';
import OrdersPage from '../pages/OrdersPage/OrdersPage';

export default function Router() {
  return (

    <Switch>
      <Route path="/register" component={ AccessPage } />
      <Route path="/login" component={ AccessPage } />
      <Route path="/products" component={ ProductsPage } />
      <Route path="/checkout" component={ CheckoutPage } />
      <Route path="/orders/:id" component={ OrdersPage } />
      <Route path="/">
        <Redirect to="/login" />
      </Route>
    </Switch>

  );
}
