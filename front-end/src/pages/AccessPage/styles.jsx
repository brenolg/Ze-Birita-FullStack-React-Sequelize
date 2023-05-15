import styled from 'styled-components';

export const AccessFormStyle = styled.div`
  .form_fields {
  align-items: center;
  display: flex;
  flex-direction: column;
  }

  .label {
    text-indent: 10px;
    width: 300px;
  }

  .label:focus-within {
    color: var(--color-quaternary);
  }

  .input:focus {
    border: var(--border-input-focus);
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
  }

  .input::placeholder {
    color: var(--color-border-gray-light);
    font: var(--font-label);
  }

  .ng-pristine:not( form ) {
    border-left: var(--input-pristine);
  }

  .ng-valid[ required ], .ng-valid.required {
    border-left: var(--input-required-valid);
  }

  .ng-dirty .ng-invalid:not( form ) {
    border-left: var(--input-required-invalid);
  }

  .alert {
    color: var(--color-input-invalid);
    font-size: 12px;
  }
`;

export const AccessPageStyle = styled.div`
.access__conteiner {
  background: var(--color-bg-blue-light);
}

.access__content {
  min-height: 400px;
  width: 330px;
}

.access__title {
  height: 100px;
  margin: 15px 0 24px;
}
`;
