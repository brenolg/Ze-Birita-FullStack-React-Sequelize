import { Route, Switch } from 'react-router-dom';
import AccessPage from '../pages/AccessPage/AccessPage';
import ProductsPage from '../pages/ProductsPage/ProductsPage';

export default function Router() {
  return (

    <Switch>
      <Route path="/register" component={ AccessPage } />
      <Route path="/products" component={ ProductsPage } />
      <Route path="/" component={ AccessPage } />
    </Switch>

  );
}
