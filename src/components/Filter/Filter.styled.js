import styled from 'styled-components';

export const LableFilter = styled.label`
  display: block;
  margin-top: 10px;
  color: #566573;
  font-weight: 500;
  font-size: 18px;
`;

export const InputFilter = styled.input`
  display: block;
  margin-top: 10px;
  padding: 10px;
  width: 100%;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  cursor: pointer;
  font-size: 15px;
  &:focus {
    outline-color: #bc8f8f;
  }
`;
