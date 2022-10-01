import styled from '@emotion/styled';

export const Table = styled.table`
  margin-top: 40px;
  width: 100%;
  border: 1px solid var(--color-gray);
  border-radius: 5px;
  background-color: var(--primary-bg-color);
  text-align: center;
`;

export const TableTitle = styled.th`
  padding: 10px;
  background-color: #369eda;
  color: var(--color-white);
`;

export const TableRow = styled.tr`
  &:nth-of-type(even) {
    background-color: var(--item-bg-color);
  }
`;

export const TableValue = styled.td`
  padding: 10px;
`;
