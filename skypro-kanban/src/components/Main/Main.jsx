import { useTasks } from '../../context/TaskContext.jsx';
import { STATUSES } from '../../utils/board.js';
import Column from '../Column/Column.jsx';
import BoardSkeleton from '../Loader/BoardSkeleton.jsx';
import { MainContainer, MainContent, MainRoot, Message, MessageText, RetryButton } from './Main.styled.js';

export default function Main() {
  const { tasks, loading, error, refresh } = useTasks();

  function renderBoard() {
    if (loading) return <BoardSkeleton />;

    if (error) {
      return (
        <Message>
          <MessageText $error>{error}</MessageText>
          <RetryButton type="button" onClick={refresh}>
            Повторить
          </RetryButton>
        </Message>
      );
    }

    if (tasks.length === 0) {
      return (
        <Message>
          <MessageText>Новых задач нет</MessageText>
        </Message>
      );
    }

    return (
      <MainContent>
        {STATUSES.map((status) => (
          <Column key={status} title={status} tasks={tasks.filter((t) => t.status === status)} />
        ))}
      </MainContent>
    );
  }

  return (
    <MainRoot>
      <MainContainer>{renderBoard()}</MainContainer>
    </MainRoot>
  );
}
