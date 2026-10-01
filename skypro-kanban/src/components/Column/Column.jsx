import Card from '../Card/Card.jsx';
import { Cards, ColumnRoot, ColumnTitle } from './Column.styled.js';

export default function Column({ title, tasks }) {
  return (
    <ColumnRoot>
      <ColumnTitle>{title}</ColumnTitle>
      <Cards>
        {tasks.map((task) => (
          <Card key={task.id} task={task} />
        ))}
      </Cards>
    </ColumnRoot>
  );
}
