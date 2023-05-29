import { Redirect, Route, Switch } from 'react-router-dom';
import AccessPage from '../pages/AccessPage/AccessPage';
import ProductsPage from '../pages/ProductsPage/ProductsPage';
import CheckoutPage from '../pages/CheckoutPage/CheckoutPage';
import OrderDetailsPage from '../pages/OrderDetailsPage/OrderDetailsPage';
import OrdersPage from '../pages/OrdersPage/OrdersPage';

export default function Router() {
  return (

    <Switch>
      <Route path="/register" component={ AccessPage } />
      <Route path="/login" component={ AccessPage } />
      <Route path="/products" component={ ProductsPage } />
      <Route path="/checkout" component={ CheckoutPage } />
      <Route path="/orders" component={ OrdersPage } exact />
      <Route path="/orders/:id" component={ OrderDetailsPage } exact />
      <Route path="/">
        <Redirect to="/products" />
      </Route>
    </Switch>

  // acredito que seria mais interessante começar com products não ? ai fazemos uma condicional se tiver dados de usuarios no localstorage vai pra producst se não vai pra login

  );
}
