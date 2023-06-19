import { notify } from './notifications/notifications';

const timer = 2500;
const forbidden = 401;
const unauthorized = 403;
const handleError = (response, history) => {
  notify(response.status);
  if (response.status === forbidden || response.status === unauthorized) {
    setTimeout(() => {
      history.push('/login');
    }, timer);
  }
};

export default handleError;
