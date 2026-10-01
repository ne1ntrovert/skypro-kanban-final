import styled from 'styled-components';
import { Container } from '../Header/Header.styled.js';

export const MainRoot = styled.main`
  width: 100%;
  min-height: calc(100vh - 70px);
  background: ${({ theme }) => theme.pageBg};
  transition: background 0.2s;
`;

export const MainContainer = styled(Container)`
  padding-top: 40px;
  padding-bottom: 40px;
`;

export const MainContent = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(220px, 1fr));
  gap: 19px;
  align-items: start;
  overflow-x: auto;
  padding-bottom: 20px;
`;

export const Message = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 60px 0;
  text-align: center;
`;

export const MessageText = styled.p`
  color: ${({ theme, $error }) => ($error ? theme.danger : theme.muted)};
  font-size: 16px;
`;

export const RetryButton = styled.button`
  height: 30px;
  padding: 0 20px;
  border: 0;
  border-radius: 4px;
  background: ${({ theme }) => theme.primary};
  color: #fff;
  font-size: 14px;
  font-weight: 500;

  &:hover {
    background: ${({ theme }) => theme.primaryHover};
  }
`;
