import { LoaderLabel, LoaderWrap, Ring } from './Loader.styled.js';

export default function Loader({ label = 'Загрузка…', fullscreen = false }) {
  return (
    <LoaderWrap $fullscreen={fullscreen} role="status" aria-live="polite">
      <Ring />
      <LoaderLabel>{label}</LoaderLabel>
    </LoaderWrap>
  );
}
