import { Link } from 'react-router-dom';
import { topicColor, formatDisplayDate } from '../../utils/board.js';
import { CardBody, CardGroup, CardRoot, CardTitle, DateRow, More, Theme } from './Card.styled.js';

function CalendarIcon() {
  return (
    <svg fill="none" width="13" height="13" viewBox="0 0 13 13" aria-hidden="true">
      <path
        d="M10.56 2.03H2.44c-.67 0-1.22.55-1.22 1.22v7.31c0 .67.55 1.22 1.22 1.22h8.12c.67 0 1.22-.55 1.22-1.22V3.25c0-.67-.55-1.22-1.22-1.22Z"
        stroke="#94A6BE"
        strokeLinejoin="round"
        strokeWidth=".8"
      />
      <path d="M11.78 4.06H1.22M3.25 1.22v.81M9.75 1.22v.81" stroke="#94A6BE" strokeLinecap="round" />
    </svg>
  );
}

export default function Card({ task }) {
  const cardPath = `/card/${task.id}`;

  return (
    <CardRoot>
      <CardGroup>
        <Theme $tone={topicColor(task.topic)}>
          <p>{task.topic}</p>
        </Theme>
        <More to={cardPath} aria-label="Открыть задачу">
          <div />
          <div />
          <div />
        </More>
      </CardGroup>
      <CardBody>
        <Link to={cardPath}>
          <CardTitle>{task.title}</CardTitle>
        </Link>
        <DateRow>
          <CalendarIcon />
          <p>{formatDisplayDate(task.date)}</p>
        </DateRow>
      </CardBody>
    </CardRoot>
  );
}
