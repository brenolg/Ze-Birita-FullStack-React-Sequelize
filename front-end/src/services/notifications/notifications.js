import { MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { toast } from 'react-hot-toast';
import './notifications.css';
import { BiTimer, BiError } from 'react-icons/bi';

const shadowValue = 'rgba(0, 0, 0, 0.8) 0px 0 4px 0px';
export const notifyNoProducts = () => toast(
  <button
    className="default-notification-container"
    type="button"
    onClick={ () => toast.dismiss() }
  >
    <MdOutlineProductionQuantityLimits className="notification-cart" />
    <div className="column-container">
      <span>Não encontramos produtos...</span>
      <span>Que tal tentar novamente?</span>
    </div>
  </button>,
  {
    duration: 1200,
    style: {
      background: '#e4e3e3',
      boxShadow: shadowValue,
      margin: 0,
      padding: 0,
    },
  },
);

const accessDenied = () => toast(
  <div className="default-notification-container">
    <BiTimer className="timer-icon" />
    <div className="column-container title-text">
      <span>Sua sessão expirou...</span>
    </div>
  </div>,
  {
    duration: 2500,
    style: {
      background: '#e4e3e3',
      boxShadow: shadowValue,
      margin: 0,
      padding: 0,
      marginTop: '20rem',
    },
  },
);

const defaultNotification = (message) => toast(
  <div className="default-notification-container">
    <BiError className="default-icon" />
    <div className="column-container large-text">
      <span>{message}</span>
    </div>
  </div>,
  {
    duration: 2500,
    style: {
      background: '#e4e3e3',
      boxShadow: shadowValue,
      margin: 0,
      padding: 0,
      marginTop: '30rem',
    },
  },
);

const forbidden = 401;
const unauthorized = 403;
export const notify = (status, message) => {
  if (status === forbidden || status === unauthorized) return accessDenied();
  defaultNotification(message);
};
