import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  overflow-y: auto;
  background: ${({ theme }) => theme.overlay};
`;

export const PopupBlock = styled.div`
  position: relative;
  width: 100%;
  max-width: ${({ $maxWidth }) => $maxWidth}px;
  margin: auto;
  padding: ${({ $padding }) => $padding};
  border: 0.7px solid ${({ theme }) => theme.surfaceBorder};
  border-radius: 10px;
  background: ${({ theme }) => theme.surface};
  box-shadow: 0 4px 67px -12px ${({ theme }) => theme.shadow};

  @media (max-width: 660px) {
    padding: 32px 16px;
  }
`;

export const PopupTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  line-height: 23px;
`;

export const HeadRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 18px;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 18px;
`;

export const Subtitle = styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
`;

export const Columns = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 21px;
  margin-bottom: 18px;

  @media (max-width: 660px) {
    flex-direction: column;
    gap: 18px;
  }
`;

export const MainColumn = styled.div`
  display: flex;
  flex: 0 1 370px;
  flex-direction: column;
  gap: 14px;
  width: 100%;
  min-width: 0;
`;

const fieldStyles = ({ theme }) => `
  width: 100%;
  border: 0.7px solid transparent;
  border-radius: 8px;
  outline: none;
  background: ${theme.fieldBg};
  color: ${theme.text};
  font-family: inherit;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;

  &::placeholder {
    color: ${theme.muted};
  }

  &:focus {
    border-color: ${theme.primary};
  }

  &:disabled {
    opacity: 0.6;
  }
`;

export const Input = styled.input`
  ${fieldStyles}
  height: 49px;
  padding: 14px;
`;

export const TextArea = styled.textarea`
  ${fieldStyles}
  height: 200px;
  padding: 20px 14px;
  resize: none;
`;

export const Chips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
`;

export const Chip = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  padding: 0 ${({ $tone }) => ($tone ? 20 : 18)}px;
  border: ${({ $tone, $active, theme }) =>
    $tone || $active ? '0.7px solid transparent' : `0.7px solid ${theme.muted}`};
  border-radius: 24px;
  background: ${({ $tone, $active, theme }) => {
    if ($tone) return theme.tones[$tone].bg;
    return $active ? theme.statusActive.bg : 'transparent';
  }};
  color: ${({ $tone, $active, theme }) => {
    if ($tone) return theme.tones[$tone].color;
    return $active ? theme.statusActive.color : theme.muted;
  }};
  font-family: inherit;
  font-size: 14px;
  font-weight: ${({ $tone }) => ($tone ? 600 : 400)};
  white-space: nowrap;
  opacity: ${({ $tone, $active }) => ($tone && !$active ? 0.4 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
`;

export const ErrorText = styled.p`
  margin-bottom: 12px;
  color: ${({ theme }) => theme.danger};
  font-size: 13px;
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const PrimaryButton = styled.button`
  height: 30px;
  padding: 0 14px;
  border: 0;
  border-radius: 4px;
  background: ${({ theme }) => theme.primary};
  color: #fff;
  font-size: 14px;
  font-weight: 500;

  &:hover:not(:disabled),
  &:active:not(:disabled) {
    background: ${({ theme }) => theme.primaryHover};
  }

  &:disabled {
    opacity: 0.6;
    cursor: default;
  }
`;

export const OutlineButton = styled.button`
  height: 30px;
  padding: 0 14px;
  border: 0.7px solid ${({ theme }) => theme.outline.color};
  border-radius: 4px;
  background: transparent;
  color: ${({ theme }) => theme.outline.color};
  font-size: 14px;
  font-weight: 500;

  &:hover:not(:disabled),
  &:active:not(:disabled) {
    background: ${({ theme }) => theme.outline.hoverBg};
    color: ${({ theme }) => theme.outline.hoverColor};
  }

  &:disabled {
    opacity: 0.6;
    cursor: default;
  }
`;
