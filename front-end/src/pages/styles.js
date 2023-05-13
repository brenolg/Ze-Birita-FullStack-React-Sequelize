import styled from 'styled-components';

const AccessForm = styled.div`
  form {
    display: flex;
    flex-direction: column;
    max-width: 425px;
    min-height: 444px;
    background: #EAF1EF;
    align-items: center;
  }

  input {
    width: 371px;
    height: 70px;
  }
  button {
    width: 370px;
    height: 59px;
  }
  
  p {
    line-height: 2px;
    font-size: 24px;
  }
`;

export default AccessForm;
