const orderStatus = {
      ENTREGUE: 'Entregue',
      PENDENTE: 'Pendente',
      PREPARANDO: 'Preparando', 
      EM_TRÂNSITO: 'Em Trânsito', 
      FINALIZADA: 'Finalizada',
      NAO_ENTREGUE: 'Não entregue', // em caso de problemas na entrega.
    };

module.exports = orderStatus;
