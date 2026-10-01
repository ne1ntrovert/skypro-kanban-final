import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderRoot = styled.header`
  width: 100%;
  background: ${({ theme }) => theme.surface};
  transition: background 0.2s;
`;

export const Container = styled.div`
  max-width: 1236px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
`;

export const HeaderBlock = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  img {
    display: block;
    width: 85px;
    height: auto;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 28px;
  position: relative;
`;

export const NewButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 178px;
  height: 30px;
  border-radius: 4px;
  background: ${({ theme }) => theme.primary};
  color: #fff;
  font-size: 14px;
  font-weight: 500;

  &:hover {
    background: ${({ theme }) => theme.primaryHover};
  }
`;

export const User = styled.button`
  position: relative;
  padding: 0 12px 0 0;
  border: 0;
  background: transparent;
  color: ${({ theme }) => theme.primary};
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;

  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: 5px;
    width: 6px;
    height: 6px;
    border-right: 1px solid currentColor;
    border-bottom: 1px solid currentColor;
    transform: rotate(45deg);
  }

  &:hover {
    color: ${({ theme }) => theme.primaryHover};
  }
`;

export const UserMenu = styled.div`
  position: absolute;
  right: 0;
  top: 41px;
  z-index: 3;
  width: 213px;
  padding: 34px;
  border: 0.7px solid ${({ theme }) => theme.surfaceBorder};
  border-radius: 10px;
  background: ${({ theme }) => theme.surface};
  box-shadow: 0 10px 39px rgba(26, 56, 101, 0.21);
  text-align: center;
`;

export const UserName = styled.p`
  margin-bottom: 4px;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
`;

export const UserMail = styled.p`
  color: ${({ theme }) => theme.muted};
  font-size: 14px;
  line-height: 21px;
  overflow-wrap: anywhere;
`;

export const ThemeRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0 30px;
  text-align: left;

  p {
    font-size: 14px;
    line-height: 21px;
  }
`;

export const ThemeToggle = styled.input.attrs({ type: 'checkbox' })`
  position: relative;
  width: 24px;
  height: 13px;
  margin: 0;
  border: 0;
  border-radius: 100px;
  background: ${({ theme }) => (theme.name === 'dark' ? theme.primary : '#EAEEF6')};
  appearance: none;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 1px;
    left: 1px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: ${({ theme }) => (theme.name === 'dark' ? '#fff' : '#94A6BE')};
    transition: left 0.2s;
  }

  &:checked::before {
    left: 12px;
  }
`;

export const ExitButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 30px;
  margin: 0 auto;
  border: 0.7px solid ${({ theme }) => theme.outline.color};
  border-radius: 4px;
  background: transparent;
  color: ${({ theme }) => theme.outline.color};
  font-size: 14px;

  &:hover,
  &:active {
    background: ${({ theme }) => theme.outline.hoverBg};
    color: ${({ theme }) => theme.outline.hoverColor};
  }
`;
