import LocalStorage from './LocalStorageHandler';
import { notify, notifyAdmin } from './notifications/notifications';

const timer = 2500;
const forbidden = 401;
const unauthorized = 403;
const timerActions = (history, setLogIn) => {
  setTimeout(() => {
    LocalStorage.remove('user');
    setLogIn(false);
    history.push('/login');
  }, timer);
};

const defaultError = (response, history, setLogIn) => {
  if (response.status === forbidden || response.status === unauthorized) {
    timerActions(history, setLogIn);
  }
  notify(response.status);
};

const admin = (response, history, setLogIn) => {
  if (response.status === forbidden || response.status === unauthorized) {
    timerActions(history, setLogIn);
  }
  notifyAdmin(response);
};

const handleError = { defaultError, admin };
export default handleError;
