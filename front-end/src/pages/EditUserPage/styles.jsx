import styled from 'styled-components';

export const EditUserStyle = styled.main`
margin: auto 6vw;

.return-btn {
  display: flex;
  align-items: center;
  font-weight: 900;
  color: var(--color-text-dark);
  gap: 1.2em;
  border: none;
  outline: none;
  background-color: transparent;
  transition: 0.3s;
  margin-bottom: 6rem;
}

.return-btn:hover {
  color: var(--color-secondary);
  scale: 1.05;
}

.info-title {
  color: var(--color-text-dark);
  font-weight: 900;
  text-align: start;
  margin-bottom: 5rem;
  padding: 0rem 1.5rem;
}

.user-info {
  display: flex;
  padding: 3rem;
  border-radius: 1rem;
  flex-direction  : column;
  margin-bottom: 5rem;
  box-shadow: rgba(0, 0, 0, 0.6) 0 1px 6px 0;
}

.label-container {
  display: flex;
  justify-content: space-between;
}

.id-label {
  height: 100%;
  color: var(--color-text-dark);
  font-weight: 900;
  padding: 0rem 1.5rem;
}

.user-label {
  width: 100%;
  color: var(--color-text-dark);
  font-weight: 900;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.user-values-container{
  width: 100%;
  color: var(--color-text-dark);
  font-weight: 900;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  height: 100%;
  height: 4rem;
  box-shadow: rgba(0, 0, 0, 0.6) 0 1px 6px 0;
}

.id-value {
  height: 100%;
  background-color: var(--color-secondary);
  padding: 0rem 1.5rem;
  display: flex;
  align-items: center;
  border-radius: 1rem 0rem 0rem 1rem;
  color: var(--color-text-light);
  box-shadow: rgba(0, 0, 0, 0.6) 0px 0px 1px 1px;
}

.user-values {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.6) 0px 0px 1px 0;
}

.user-values:last-child {
  border-radius: 0rem 1rem 1rem 0rem;
}
`;

export default EditUserStyle;
