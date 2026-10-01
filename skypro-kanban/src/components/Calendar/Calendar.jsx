import { useState } from 'react';
import { formatDisplayDate, toDateOnly, todayIso } from '../../utils/board.js';
import {
  Cell,
  Cells,
  CalendarRoot,
  DayName,
  DayNames,
  Empty,
  Header,
  Month,
  NavButton,
  NavButtons,
  Period,
  Title,
} from './Calendar.styled.js';

const MONTHS = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];
const DAY_NAMES = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

const pad = (n) => String(n).padStart(2, '0');
const toIso = (year, month, day) => `${year}-${pad(month + 1)}-${pad(day)}`;

function getInitialMonth(value) {
  const [y, m] = (toDateOnly(value) || todayIso()).split('-').map(Number);
  return { year: y, month: m - 1 };
}

function Arrow({ direction }) {
  const d = direction === 'left' ? 'M5.5 1 1.5 5l4 4' : 'M0.5 1l4 4-4 4';
  return (
    <svg width="6" height="10" viewBox="0 0 6 10" fill="none" aria-hidden="true">
      <path d={d} stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * Календарь выбора срока исполнения.
 * Без onChange работает в режиме просмотра: только подсвечивает выбранную дату.
 */
export default function Calendar({ value, onChange, disabled = false }) {
  const selected = toDateOnly(value);
  const readOnly = !onChange;
  const [view, setView] = useState(() => getInitialMonth(value));

  const today = todayIso();
  const daysInMonth = new Date(view.year, view.month + 1, 0).getDate();
  // getDay(): 0 — воскресенье; сдвигаем, чтобы неделя начиналась с понедельника
  const offset = (new Date(view.year, view.month, 1).getDay() + 6) % 7;

  function shiftMonth(delta) {
    const next = new Date(view.year, view.month + delta, 1);
    setView({ year: next.getFullYear(), month: next.getMonth() });
  }

  return (
    <CalendarRoot>
      <Title>Даты</Title>
      <Header>
        <Month>
          {MONTHS[view.month]} {view.year}
        </Month>
        <NavButtons>
          <NavButton type="button" aria-label="Предыдущий месяц" onClick={() => shiftMonth(-1)}>
            <Arrow direction="left" />
          </NavButton>
          <NavButton type="button" aria-label="Следующий месяц" onClick={() => shiftMonth(1)}>
            <Arrow direction="right" />
          </NavButton>
        </NavButtons>
      </Header>
      <DayNames>
        {DAY_NAMES.map((name) => (
          <DayName key={name}>{name}</DayName>
        ))}
      </DayNames>
      <Cells>
        {Array.from({ length: offset }, (_, i) => (
          <Empty key={`empty-${i}`} />
        ))}
        {Array.from({ length: daysInMonth }, (_, i) => {
          const iso = toIso(view.year, view.month, i + 1);
          return (
            <Cell
              key={iso}
              type="button"
              $active={iso === selected}
              $today={iso === today}
              $readOnly={readOnly}
              disabled={disabled || readOnly}
              aria-pressed={iso === selected}
              onClick={() => onChange(iso)}
            >
              {i + 1}
            </Cell>
          );
        })}
      </Cells>
      <Period>
        {selected ? (
          <>
            Срок исполнения: <span>{formatDisplayDate(selected)}.</span>
          </>
        ) : (
          'Выберите срок исполнения.'
        )}
      </Period>
    </CalendarRoot>
  );
}
