import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CardRoot = styled.div`
  display: flex;
  flex-direction: column;
  height: 130px;
  padding: 13px 13px 19px;
  border-radius: 10px;
  background: ${({ theme }) => theme.surface};
  box-shadow: 0 4px 6px ${({ theme }) => theme.cardShadow};
  transition: transform 0.2s, box-shadow 0.2s, background 0.2s;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 18px ${({ theme }) => theme.cardShadow};
  }
`;

export const CardGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const CardBody = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  min-height: 0;
`;

export const Theme = styled.div`
  display: flex;
  align-items: center;
  height: 20px;
  padding: 0 14px;
  border-radius: 18px;
  font-size: 10px;
  font-weight: 600;
  background: ${({ theme, $tone }) => (theme.tones[$tone] || theme.tones.gray).bg};
  color: ${({ theme, $tone }) => (theme.tones[$tone] || theme.tones.gray).color};

  p {
    color: inherit;
  }
`;

export const More = styled(Link)`
  display: flex;
  gap: 2px;
  padding: 5px;

  div {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: ${({ theme }) => theme.muted};
  }
`;

export const CardTitle = styled.h3`
  display: -webkit-box;
  overflow: hidden;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const DateRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: ${({ theme }) => theme.muted};
  font-size: 10px;
  line-height: 13px;

  svg {
    flex: 0 0 auto;
  }
`;
