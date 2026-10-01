import styled from 'styled-components';

export const AuthWrap = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.authBg};
  transition: background 0.2s;
`;

export const AuthBlock = styled.div`
  width: 100%;
  max-width: 368px;
  padding: 50px 60px;
  border: 0.7px solid ${({ theme }) => theme.surfaceBorder};
  border-radius: 10px;
  background: ${({ theme }) => theme.surface};
  box-shadow: 0 4px 67px -12px ${({ theme }) => theme.shadow};

  @media (max-width: 375px) {
    max-width: none;
    padding: 24px 16px;
    border: none;
    border-radius: 0;
    background: transparent;
    box-shadow: none;
  }
`;

export const AuthTitle = styled.h2`
  margin-bottom: 20px;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.6px;
`;

export const AuthForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AuthInput = styled.input`
  width: 100%;
  height: 30px;
  padding: 0 10px;
  border: 0.7px solid ${({ theme, $invalid }) => ($invalid ? theme.danger : theme.border)};
  border-radius: 8px;
  outline: none;
  background: transparent;
  color: ${({ theme }) => theme.text};
  font-family: inherit;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;

  &::placeholder {
    color: ${({ theme }) => theme.muted};
  }

  &:focus {
    border-color: ${({ theme, $invalid }) => ($invalid ? theme.danger : theme.primary)};
  }

  @media (max-width: 375px) {
    height: 40px;
  }
`;

export const Fields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  width: 100%;
`;

export const PasswordWrap = styled.div`
  position: relative;
  width: 100%;

  input {
    padding-right: 36px;
  }
`;

export const ShowButton = styled.button`
  position: absolute;
  top: 50%;
  right: 10px;
  display: flex;
  padding: 0;
  border: 0;
  background: transparent;
  color: ${({ theme }) => theme.muted};
  transform: translateY(-50%);
`;

export const AuthButton = styled.button`
  width: 100%;
  height: 30px;
  margin-top: 20px;
  border: none;
  border-radius: 4px;
  outline: none;
  background: ${({ theme }) => theme.primary};
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.14px;

  &:hover:not(:disabled),
  &:active:not(:disabled) {
    background: ${({ theme }) => theme.primaryHover};
  }

  &:disabled {
    opacity: 0.6;
    cursor: default;
  }

  @media (max-width: 375px) {
    height: 40px;
  }
`;

export const AuthGroup = styled.div`
  max-width: 185px;
  margin: 20px auto 0;
  text-align: center;

  p,
  a {
    color: ${({ theme }) => theme.muted};
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.14px;
  }

  a {
    text-decoration: underline;
  }
`;

export const AuthError = styled.p`
  width: 100%;
  color: ${({ theme }) => theme.danger};
  font-size: 12px;
  line-height: 18px;
`;
