import { ButtonGroup, Overlay, OutlineButton, PopupBlock, PopupTitle, PrimaryButton } from '../Popup/Popup.styled.js';

export default function PopExit({ onConfirm, onCancel }) {
  return (
    <Overlay onMouseDown={(e) => e.target === e.currentTarget && onCancel()}>
      <PopupBlock $maxWidth={370} $padding="50px 28px" role="dialog" aria-modal="true">
        <PopupTitle style={{ marginBottom: 20, textAlign: 'center', fontSize: 20, fontWeight: 700 }}>
          Выйти из аккаунта?
        </PopupTitle>
        <ButtonGroup style={{ flexWrap: 'nowrap', gap: 7 }}>
          <PrimaryButton type="button" style={{ flex: 1, padding: 0 }} onClick={onConfirm}>
            Да, выйти
          </PrimaryButton>
          <OutlineButton type="button" style={{ flex: 1, padding: 0 }} onClick={onCancel}>
            Нет, остаться
          </OutlineButton>
        </ButtonGroup>
      </PopupBlock>
    </Overlay>
  );
}
