import styled from 'styled-components';

export const CalendarRoot = styled.div`
  flex: 0 0 168px;
  width: 168px;
  margin-bottom: 4px;

  @media (max-width: 660px) {
    width: 100%;
    max-width: 340px;
  }
`;

export const Title = styled.p`
  margin-bottom: 14px;
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 25px;
`;

export const Month = styled.p`
  color: ${({ theme }) => theme.calendarText};
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
`;

export const NavButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const NavButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 11px;
  height: 25px;
  padding: 0;
  border: 0;
  background: transparent;
  color: ${({ theme }) => theme.text};
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`;

/* Колонки по 26px: круг даты 22px + зазор. Сетка сдвинута так, чтобы центр
   первой колонки совпал с левым краем блока, как в макете. */
const grid = `
  display: grid;
  grid-template-columns: repeat(7, 26px);
  margin-left: -7px;
`;

export const DayNames = styled.div`
  ${grid}
  margin-top: 7px;
`;

export const DayName = styled.span`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.calendarText};
  font-size: 10px;
  font-weight: 600;
  line-height: 12px;
`;

export const Cells = styled.div`
  ${grid}
  row-gap: 4px;
  margin-top: 11px;
`;

export const Cell = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  margin: 0 auto;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: ${({ $active, theme }) => ($active ? theme.statusActive.bg : 'transparent')};
  color: ${({ $active, $today, theme }) => {
    if ($active) return theme.statusActive.color;
    return $today ? theme.text : theme.calendarText;
  }};
  font-family: inherit;
  font-size: 10px;
  font-weight: ${({ $today, $active }) => ($today || $active ? 700 : 400)};
  letter-spacing: -0.2px;
  cursor: ${({ $readOnly }) => ($readOnly ? 'default' : 'pointer')};

  &:hover:not(:disabled) {
    background: ${({ $active, theme }) => ($active ? '' : theme.inputBg)};
  }
`;

export const Empty = styled.span`
  width: 22px;
  height: 22px;
`;

export const Period = styled.p`
  margin-top: 14px;
  color: ${({ theme }) => theme.calendarText};
  font-size: 10px;
  line-height: 12px;

  span {
    color: ${({ theme }) => theme.text};
  }
`;
