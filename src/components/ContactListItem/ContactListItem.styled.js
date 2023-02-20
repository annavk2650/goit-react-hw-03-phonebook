import styled from 'styled-components';

export const ItemCont = styled.li`
  display: flex;
  justify-content: space-between;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const BtnContItem = styled.button`
  width: 30px;
  height: auto;
  cursor: pointer;
  display: inline-block;
  /* background-image: url(../../img/delete.svg); */
  background-repeat: no-repeat;
  background-size: contain;
  background-color: transparent;
  border: none;
  outline: none;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.1);
  }
`;
