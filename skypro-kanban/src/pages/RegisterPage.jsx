import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import { isBlank } from '../utils/validation.js';
import {
  AuthBlock,
  AuthButton,
  AuthError,
  AuthForm,
  Fields,
  AuthGroup,
  AuthInput,
  AuthTitle,
  AuthWrap,
  PasswordWrap,
  ShowButton,
} from './Auth.styled.js';

const MIN_PASSWORD_LENGTH = 6;

function EyeIcon({ crossed }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M1 8s2.6-4.5 7-4.5S15 8 15 8s-2.6 4.5-7 4.5S1 8 1 8Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1.2" />
      {crossed && <path d="m2.5 13.5 11-11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />}
    </svg>
  );
}

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (isBlank(name) || isBlank(login) || isBlank(password)) {
      setError('Заполните все поля');
      return;
    }
    if (password.trim().length < MIN_PASSWORD_LENGTH) {
      setError(`Пароль должен быть не короче ${MIN_PASSWORD_LENGTH} символов`);
      return;
    }

    setError('');
    setSubmitting(true);
    try {
      await register(name.trim(), login.trim(), password);
      navigate('/', { replace: true });
    } catch (err) {
      setError(err.message || 'Не удалось зарегистрироваться');
      setSubmitting(false);
    }
  }

  return (
    <AuthWrap>
      <AuthBlock>
        <AuthTitle>Регистрация</AuthTitle>
        <AuthForm onSubmit={handleSubmit} noValidate>
          <Fields>
            <AuthInput
              type="text"
              placeholder="Имя"
              autoComplete="name"
              value={name}
              $invalid={Boolean(error)}
              onChange={(e) => setName(e.target.value)}
              disabled={submitting}
            />
            <AuthInput
              type="text"
              placeholder="Эл. почта"
              autoComplete="username"
              value={login}
              $invalid={Boolean(error)}
              onChange={(e) => setLogin(e.target.value)}
              disabled={submitting}
            />
            <PasswordWrap>
              <AuthInput
                type={showPassword ? 'text' : 'password'}
                placeholder="Пароль"
                autoComplete="new-password"
                value={password}
                $invalid={Boolean(error)}
                onChange={(e) => setPassword(e.target.value)}
                disabled={submitting}
              />
              <ShowButton
                type="button"
                aria-label={showPassword ? 'Скрыть пароль' : 'Показать пароль'}
                onClick={() => setShowPassword((visible) => !visible)}
              >
                <EyeIcon crossed={showPassword} />
              </ShowButton>
            </PasswordWrap>
            {error && <AuthError role="alert">{error}</AuthError>}
          </Fields>
          <AuthButton type="submit" disabled={submitting}>
            {submitting ? 'Регистрируем…' : 'Зарегистрироваться'}
          </AuthButton>
          <AuthGroup>
            <p>
              Уже есть аккаунт? <Link to="/login">Войдите здесь</Link>
            </p>
          </AuthGroup>
        </AuthForm>
      </AuthBlock>
    </AuthWrap>
  );
}
