import styled from 'styled-components';

export const AccessFormStyle = styled.div`
.form-register {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding-bottom: 3rem;
}

.register-label {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: flex-start;
  color: var(--color-text-dark);
  font-weight: 900;
  width: 80%;
  font-size : 1.8rem;
  margin: auto;
}

.register-input {
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.8) 0px 0px 4px 0px;
  border-radius: 1rem;
  height: 3rem;
  transition: all 0.3s;
}

.register-input:hover {
  box-shadow: rgba(0, 0, 0, 0.8) 0px 0px 8px 0px;
}

.register-input:focus {
  box-shadow: rgba(0, 0, 0, 0.8) 0px 0px 8px 0px;
}

.register-input.input-error {
  box-shadow: var(--color-input-invalid) 0px 0px 8px 0px;
}

.error{
  color: var(--color-input-invalid);
  font-size: 1.6rem;
  font-weight: 600;
  height: 1.6rem;
  text-align: center;
}

.form-button {
  border: none;
  border-radius: 2rem;
  box-shadow: rgba(0, 0, 0, 0.5) 0 2px 4px 0;
  color: var(--color-text-light);
  font-size: 1.8rem;
  font-weight: 900;
  padding: 0.5em 0em;
  width: 80%;
  margin: auto;
  text-shadow: 0 0 2px black;
  transition: all 0.3s ease-in-out;
  border: none;
  outline: none;
}

.form-button:hover {
  box-shadow: rgba(0, 0, 0, 0.5) 0 2px 6px 2px;
}

.login-button {
  background-color: var(--color-secondary);
}

.register-button {
  background-color: var(--color-tertiary);
}

`;

export const AccessPageStyle = styled.div`
padding: 0 6vw 3rem;

.logo-section {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 900;
  color: var(--color-text-dark);
  gap: 3rem;
  margin-bottom: 8rem;
}

.logo-subtitle {
  font-weight: 600;
}

.logo-img {
  height: 12rem;
  width: 12rem;
}

.text-logo-container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-weight: 900;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.25);
}

.form-section {
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.8) 0px 0px 4px 0px;
  width: 50rem;
  margin: auto;
  padding: 2rem;
}

.form-title  {
  font-weight: 900;
  color: var(--color-text-dark);
  text-align: center;
  margin-bottom: 3rem;
  margin-top: 2rem;
}
`;
