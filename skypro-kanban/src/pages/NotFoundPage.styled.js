import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NotFoundWrap = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: ${({ theme }) => theme.authBg};
`;

export const NotFoundBlock = styled.div`
  width: 100%;
  max-width: 368px;
  padding: 50px 60px;
  border: 0.7px solid ${({ theme }) => theme.surfaceBorder};
  border-radius: 10px;
  background: ${({ theme }) => theme.surface};
  box-shadow: 0 4px 67px -12px ${({ theme }) => theme.shadow};
  text-align: center;

  @media (max-width: 375px) {
    padding: 24px 16px;
  }
`;

export const NotFoundCode = styled.p`
  font-size: 72px;
  font-weight: 700;
  line-height: 1;
  color: ${({ theme }) => theme.primary};
`;

export const NotFoundTitle = styled.h2`
  margin-top: 12px;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.6px;
`;

export const NotFoundText = styled.p`
  margin-top: 8px;
  color: ${({ theme }) => theme.muted};
  font-size: 14px;
  line-height: 150%;
`;

export const NotFoundBack = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  margin-top: 24px;
  border-radius: 4px;
  background: ${({ theme }) => theme.primary};
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.14px;

  &:hover {
    background: ${({ theme }) => theme.primaryHover};
  }
`;
