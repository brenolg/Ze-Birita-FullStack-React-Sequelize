import { toast } from 'react-hot-toast';
import { BiError, BiTimer } from 'react-icons/bi';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';
import './notifications.css';

import { BsCheck2Circle } from 'react-icons/bs';

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

const defaultNotification = (status) => {
  const notificationMessages = {
    400: 'A solicitação é inválida.',
    404: 'O recurso solicitado não foi encontrado.',
    409: 'Houve um conflito com o estado atual do recurso.',
    422: 'A solicitação não pôde ser processada devido a erros de validação.',
    500: 'Error - Ocorreu um erro interno no servidor.',
  };

  const defaultMessage = `Erro (${status}) - Ocorreu um erro durante a solicitação.`;

  const notificationMessage = notificationMessages[status] || defaultMessage;
  toast(
    <div className="default-notification-container">
      <BiError className="default-icon" />
      <div className="column-container large-text">
        <span className="error-span">{notificationMessage}</span>
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
        width: '100%',

      },
    },
  );
};
const noContent = 204;
export const notifyAdmin = (response) => {
  let responseMessage = 'Usuário criado com sucesso!';
  console.log(response);
  if (response.status === noContent) {
    responseMessage = 'Usuário deletado com sucesso!';
  }
  if (response.error) {
    responseMessage = `Erro (${response.status}) - ${response.message}`;
  }

  toast(
    <button
      className="default-notification-container"
      type="button"
      onClick={ () => toast.dismiss() }
    >

      {response.error
        ? <BiError className="default-icon" />
        : <BsCheck2Circle className="default-icon color-green" />}

      <div className="column-container large-text">
        <span className="error-span">{responseMessage }</span>

      </div>
    </button>,
    {
      duration: 1200,
      style: {
        background: '#e4e3e3',
        boxShadow: shadowValue,
        margin: 0,
        padding: 0,
        marginTop: '30rem',
        width: '100%',
      },
    },
  );
};

const forbidden = 401;
const unauthorized = 403;
export const notify = (status) => {
  if (status === forbidden || status === unauthorized) return accessDenied();
  defaultNotification(status);
};
