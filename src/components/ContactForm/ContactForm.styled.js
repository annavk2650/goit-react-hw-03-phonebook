import styled from 'styled-components';

export const FormCont = styled.form`
  margin-top: 10px;
  margin-bottom: 30px;
`;

export const LabelCont = styled.label`
  display: block;
  margin-bottom: 20px;
  color: #566573;
  font-weight: 500;
  font-size: 20px;
`;

export const InputCont = styled.input`
  display: block;
  margin-left: auto;
  margin-right: auto;
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
export const BtnCont = styled.button`
  padding: 10px 20px;
  background-color: #bc8f8f;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  border: none;
  outline: none;
  opacity: 0.8;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);

  cursor: pointer;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  text-transform: uppercase;
  &:hover {
    opacity: 1;
  }
`;
