import { Redirect, Route, Switch } from 'react-router-dom';
import AccessPage from '../pages/AccessPage/AccessPage';
import CheckoutPage from '../pages/CheckoutPage/CheckoutPage';
import EditUserPage from '../pages/EditUserPage/EditUserPage';
import ManagerPage from '../pages/ManagerPage/ManagerPage';
import OrderDetailsPage from '../pages/OrderDetailsPage/OrderDetailsPage';
import OrdersPage from '../pages/OrdersPage/OrdersPage';
import ProductDetails from '../pages/ProductDetails/ProductDetails';
import ProductsPage from '../pages/ProductsPage/ProductsPage';

export default function Router() {
  return (

    <Switch>
      <Route path="/register" component={ AccessPage } />
      <Route path="/login" component={ AccessPage } />
      <Route path="/products" component={ ProductsPage } exact />
      <Route path="/products/:id" component={ ProductDetails } exact />
      <Route path="/search" component={ ProductsPage } exact />
      <Route path="/checkout" component={ CheckoutPage } />
      <Route path="/orders" component={ OrdersPage } exact />
      <Route path="/orders/:id" component={ OrderDetailsPage } exact />
      <Route path="/manager" component={ ManagerPage } exact />
      <Route path="/manager/:id" component={ EditUserPage } exact />
      <Route path="/">
        <Redirect to="/products" />
      </Route>
    </Switch>
  );
}
