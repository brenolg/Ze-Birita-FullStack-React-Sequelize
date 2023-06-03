import styled from 'styled-components';

export const ManagerStyle = styled.main`
.manager-section {
  display: flex;
  align-items: center;
  margin: auto 6vw;
  padding: 3rem;
  border-radius: 1rem;
  flex-direction  : column;
  margin-bottom: 5rem;
  box-shadow: rgba(0, 0, 0, 0.6) 0 1px 6px 0;
}

.register-title {
  color: var(--color-text-dark);
  font-weight: 900;
  text-align: start;
  width: 100%;
  margin-bottom: 2em;
}

.form-register {
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 3rem;
}

.register-label {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: flex-start;
  color: var(--color-text-dark);
  font-weight: 900;
  width: 100%;
}

.register-input {
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.8) 0px 0px 4px 0px;
  border-radius: 1rem;
  height: 3rem;
  transition: all 0.2s;
}

.register-input:hover {
  box-shadow: rgba(0, 0, 0, 0.8) 0px 0px 8px 0px;
}

.register-input:focus {
  box-shadow: rgba(0, 0, 0, 0.8) 0px 0px 8px 0px;
}

.register-select-label {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: flex-start;
  color: var(--color-text-dark);
  font-weight: 900;
  width: 50%;

}

.register-select {
  padding: 0rem;
  box-shadow: rgba(0, 0, 0, 0.8) 0px 0px 4px 0px;
  border-radius: 1rem;
  height: 3rem;
  padding:  0 1rem;

}

.register-button {
  background-color: var(--color-tertiary);
  border: none;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.8) 0 2px 4px 0;
  color: var(--color-text-light);
  font-size: 1.8rem;
  font-style: uppercase;
  font-weight: 900;
  outline: none;
  padding: 0.5em 1em;
  text-shadow: 0 0 2px black;
  transition: all 0.3s ease-in-out;
}

.register-button:hover {
  background-color: var(--color-status-preparing);
  box-shadow: rgba(0, 0, 0, 0.8) 0 2px 6px 2px;
}

.users-list {
  width: 100%;
}

.label-section {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 2.5rem 1rem;
  color: var(--color-text-dark);
  font-weight: 900;

}

.users-list{
  box-shadow: rgba(0, 0, 0, 0.6) 0 1px 6px 0;
  border-radius: 1rem;
}

.user-container{
  box-shadow: rgba(0, 0, 0, 0.6) 0 1px 6px 0;
  border-radius: 1rem;
  margin: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--color-text-dark);
  height: 100%;
  margin-bottom: 2rem;
}

.label-id-button {
  padding: 1rem;
}

.user-id{
  background-color: var(--color-primary);
  color: var(--color-text-light);
  padding: 1rem;
  height: 100%;
  border-radius: 1rem 0 0 1rem;
}

.user-label{
  width: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.user-content{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35%;
}

.user-button {
  background-color: var(--color-tertiary);
  border: none;
  border-radius: 1rem;
  height: 100%;
  color: var(--color-text-light);
  font-weight: 900;
  padding: 0.6em 1em;
  font-size: 1.8rem;
}




`;

export default ManagerStyle;
