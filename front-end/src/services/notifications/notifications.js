import { toast } from 'react-hot-toast';
import { BiError, BiTimer } from 'react-icons/bi';
import { BsCheck2Circle } from 'react-icons/bs';
import { FaExclamation } from 'react-icons/fa';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';
import './notifications.css';

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
      marginTop: '20rem',
    },
  },
);

const defaultNotification = (status) => {
  console.log(status);
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
      },
    },
  );
};

export const adminNotification = (response) => {
  const notificationMessages = {
    200: 'Usuário editado com sucesso!',
    201: 'Usuário criado com sucesso!',
    204: 'Usuário deletado com sucesso!',
    409: 'Houve um conflito com o estado atual do recurso.',
    422: 'A solicitação não pôde ser processada devido a erros de validação.',
    500: 'Error - Ocorreu um erro interno no servidor.',
  };

  const defaultMessage = 'Erro durante a solicitação!';
  const notificationMessage = notificationMessages[response.status]
  || defaultMessage;
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

        {response.error
        && <span className="error-span">{`Erro: ${response.status}` }</span>}

        <span className="error-span">{notificationMessage }</span>
        <span className="error-span">{response.message }</span>

      </div>
    </button>,
    {
      duration: 1800,
      style: {
        background: '#e4e3e3',
        boxShadow: shadowValue,
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

export const notifyAdmin = (response) => {
  if (response.status === forbidden || response.status === unauthorized) {
    return accessDenied();
  }
  adminNotification(response);
};

export const noCartProducts = () => toast(
  <button
    className="default-notification-container"
    type="button"
    onClick={ () => toast.dismiss() }
  >
    <FaExclamation className="exclamation-icon" />
    <div className="column-container large-text">
      <span className="error-span">
        Adicione produtos ao carrinho para finalizar a compra!
      </span>
    </div>
  </button>,
  {
    position: 'bottom-center',
    duration: 1200,
    style: {
      background: '#e4e3e3',
      boxShadow: shadowValue,
      marginBottom: '12rem',
    },
  },
);
