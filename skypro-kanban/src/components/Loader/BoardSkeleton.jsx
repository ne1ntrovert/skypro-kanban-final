import { STATUSES } from '../../utils/board.js';
import { ColumnTitle } from '../Column/Column.styled.js';
import { MainContent } from '../Main/Main.styled.js';
import { SkeletonBlock, SkeletonColumn } from './Loader.styled.js';

const CARDS_PER_COLUMN = [5, 1, 3, 1, 1];

export default function BoardSkeleton() {
  return (
    <MainContent role="status" aria-live="polite" aria-label="Загружаем задачи">
      {STATUSES.map((status, i) => (
        <SkeletonColumn key={status}>
          <ColumnTitle>{status}</ColumnTitle>
          {Array.from({ length: CARDS_PER_COLUMN[i] }, (_, j) => (
            <SkeletonBlock key={j} $delay={(i + j) * 0.12} />
          ))}
        </SkeletonColumn>
      ))}
    </MainContent>
  );
}
