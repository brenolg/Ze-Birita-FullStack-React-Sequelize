import { Route, Switch } from 'react-router-dom';
import AccessPage from '../pages/AccessPage';

export default function Router() {
  return (
    <Switch>
      <Route path="/" component={ AccessPage } />
    </Switch>
  );
}
