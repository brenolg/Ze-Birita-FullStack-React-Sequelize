import { Route, Switch } from 'react-router-dom';
import AccessPage from '../pages/AccessPage/AccessPage';

export default function Router() {
  return (
    <Switch>
      <Route path="/register" component={ AccessPage }>
        <AccessPage login={ false } />
      </Route>
      <Route path="/" component={ AccessPage }>
        <AccessPage login />
      </Route>
    </Switch>
  );
}
