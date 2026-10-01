import { useState } from 'react';
import { STATUSES, TOPICS, topicColor } from '../../utils/board.js';
import { validateTask } from '../../utils/validation.js';
import Calendar from '../Calendar/Calendar.jsx';
import {
  Actions,
  ButtonGroup,
  Chip,
  Chips,
  Columns,
  ErrorText,
  HeadRow,
  Input,
  MainColumn,
  OutlineButton,
  Overlay,
  PopupBlock,
  PopupTitle,
  PrimaryButton,
  Section,
  Subtitle,
  TextArea,
} from '../Popup/Popup.styled.js';

function NotFound({ onClose }) {
  return (
    <Overlay onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <PopupBlock $maxWidth={630} $padding="40px 30px 48px" role="dialog" aria-modal="true">
        <Section>
          <p>Задача не найдена.</p>
        </Section>
        <PrimaryButton type="button" onClick={onClose}>
          Закрыть
        </PrimaryButton>
      </PopupBlock>
    </Overlay>
  );
}

export default function PopBrowse({ task, mode = 'view', onClose, onEdit, onSave, onCancel, onDelete }) {
  const [title, setTitle] = useState(task?.title || '');
  const [description, setDescription] = useState(task?.description || '');
  const [status, setStatus] = useState(task?.status || STATUSES[0]);
  const [date, setDate] = useState(task?.date || '');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  if (!task) return <NotFound onClose={onClose} />;

  const isEdit = mode === 'edit';
  const topic = task.topic || TOPICS[0].name;

  async function handleSave() {
    const validationError = validateTask({ title, description });
    if (validationError) {
      setError(validationError);
      return;
    }
    if (!date) {
      setError('Выберите срок исполнения');
      return;
    }

    setError('');
    setSubmitting(true);
    try {
      await onSave({ title: title.trim(), description: description.trim(), topic, status, date });
    } catch (err) {
      setError(err.message || 'Не удалось сохранить задачу');
      setSubmitting(false);
    }
  }

  async function handleDelete() {
    setError('');
    setSubmitting(true);
    try {
      await onDelete();
    } catch (err) {
      setError(err.message || 'Не удалось удалить задачу');
      setSubmitting(false);
    }
  }

  const visibleStatuses = isEdit ? STATUSES : [status];

  return (
    <Overlay onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <PopupBlock $maxWidth={630} $padding="40px 30px 48px" role="dialog" aria-modal="true">
        <HeadRow>
          {isEdit ? (
            <Input
              aria-label="Название задачи"
              value={title}
              disabled={submitting}
              onChange={(e) => setTitle(e.target.value)}
            />
          ) : (
            <PopupTitle>{title}</PopupTitle>
          )}
          <Chip as="div" $tone={topicColor(topic)} $active style={{ flexShrink: 0 }}>
            {topic}
          </Chip>
        </HeadRow>

        <Section>
          <Subtitle>Статус</Subtitle>
          <Chips>
            {visibleStatuses.map((s) => (
              <Chip
                key={s}
                type="button"
                $active={status === s}
                disabled={!isEdit || submitting}
                onClick={() => setStatus(s)}
              >
                {s}
              </Chip>
            ))}
          </Chips>
        </Section>

        <Columns>
          <MainColumn>
            <Subtitle as="label" htmlFor="browseDescription">
              Описание задачи
            </Subtitle>
            <TextArea
              id="browseDescription"
              readOnly={!isEdit}
              disabled={submitting}
              placeholder="Введите описание задачи..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </MainColumn>
          <Calendar value={date} onChange={isEdit ? setDate : undefined} disabled={submitting} />
        </Columns>

        {error && <ErrorText role="alert">{error}</ErrorText>}

        <Actions>
          {isEdit ? (
            <ButtonGroup>
              <PrimaryButton type="button" disabled={submitting} onClick={handleSave}>
                {submitting ? 'Сохраняем…' : 'Сохранить'}
              </PrimaryButton>
              <OutlineButton type="button" disabled={submitting} onClick={onCancel}>
                Отменить
              </OutlineButton>
              <OutlineButton type="button" disabled={submitting} onClick={handleDelete}>
                Удалить задачу
              </OutlineButton>
            </ButtonGroup>
          ) : (
            <ButtonGroup>
              <OutlineButton type="button" disabled={submitting} onClick={onEdit}>
                Редактировать задачу
              </OutlineButton>
              <OutlineButton type="button" disabled={submitting} onClick={handleDelete}>
                {submitting ? 'Удаляем…' : 'Удалить задачу'}
              </OutlineButton>
            </ButtonGroup>
          )}
          <PrimaryButton type="button" disabled={submitting} onClick={onClose}>
            Закрыть
          </PrimaryButton>
        </Actions>
      </PopupBlock>
    </Overlay>
  );
}
