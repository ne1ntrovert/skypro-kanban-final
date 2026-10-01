import { useState } from 'react';
import { TOPICS } from '../../utils/board.js';
import { validateTask } from '../../utils/validation.js';
import Calendar from '../Calendar/Calendar.jsx';
import {
  Actions,
  Chip,
  Chips,
  Columns,
  ErrorText,
  Input,
  MainColumn,
  Overlay,
  PopupBlock,
  PopupTitle,
  PrimaryButton,
  Section,
  Subtitle,
  TextArea,
} from '../Popup/Popup.styled.js';

export default function PopNewCard({ onClose, onCreate }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [topic, setTopic] = useState(TOPICS[0].name);
  const [date, setDate] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  async function handleCreate() {
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
      await onCreate({
        title: title.trim(),
        description: description.trim(),
        topic,
        date,
        status: 'Без статуса',
      });
    } catch (err) {
      setError(err.message || 'Не удалось создать задачу');
      setSubmitting(false);
    }
  }

  return (
    <Overlay onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <PopupBlock $maxWidth={630} $padding="40px 30px 48px" role="dialog" aria-modal="true">
        <PopupTitle style={{ marginBottom: 20 }}>Создание задачи</PopupTitle>

        <Columns style={{ marginBottom: 20 }}>
          <MainColumn style={{ gap: 20 }}>
            <Section style={{ marginBottom: 0 }}>
              <Subtitle as="label" htmlFor="formTitle">
                Название задачи
              </Subtitle>
              <Input
                id="formTitle"
                type="text"
                placeholder="Введите название задачи..."
                value={title}
                disabled={submitting}
                onChange={(e) => setTitle(e.target.value)}
                autoFocus
              />
            </Section>
            <Section style={{ marginBottom: 0 }}>
              <Subtitle as="label" htmlFor="formDescription">
                Описание задачи
              </Subtitle>
              <TextArea
                id="formDescription"
                placeholder="Введите описание задачи..."
                value={description}
                disabled={submitting}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Section>
          </MainColumn>
          <Calendar value={date} onChange={setDate} disabled={submitting} />
        </Columns>

        <Section style={{ marginBottom: 20 }}>
          <Subtitle>Категория</Subtitle>
          <Chips>
            {TOPICS.map((t) => (
              <Chip
                key={t.name}
                type="button"
                $tone={t.color}
                $active={topic === t.name}
                disabled={submitting}
                onClick={() => setTopic(t.name)}
              >
                {t.name}
              </Chip>
            ))}
          </Chips>
        </Section>

        {error && <ErrorText role="alert">{error}</ErrorText>}

        <Actions style={{ justifyContent: 'flex-end' }}>
          <PrimaryButton type="button" disabled={submitting} onClick={handleCreate}>
            {submitting ? 'Создаём…' : 'Создать задачу'}
          </PrimaryButton>
        </Actions>
      </PopupBlock>
    </Overlay>
  );
}
