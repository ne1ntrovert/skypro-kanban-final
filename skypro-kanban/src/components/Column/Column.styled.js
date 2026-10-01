import styled from 'styled-components';

export const ColumnRoot = styled.section`
  min-width: 0;
`;

export const ColumnTitle = styled.p`
  margin-bottom: 20px;
  color: ${({ theme }) => theme.muted};
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  text-transform: uppercase;
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
