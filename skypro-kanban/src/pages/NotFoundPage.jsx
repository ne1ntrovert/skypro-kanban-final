import {
  NotFoundBack,
  NotFoundBlock,
  NotFoundCode,
  NotFoundText,
  NotFoundTitle,
  NotFoundWrap,
} from './NotFoundPage.styled.js';

export default function NotFoundPage() {
  return (
    <NotFoundWrap>
      <NotFoundBlock>
        <NotFoundCode>404</NotFoundCode>
        <NotFoundTitle>Страница не найдена</NotFoundTitle>
        <NotFoundText>Возможно, она была удалена или вы ошиблись в адресе.</NotFoundText>
        <NotFoundBack to="/">Вернуться на главную</NotFoundBack>
      </NotFoundBlock>
    </NotFoundWrap>
  );
}
