import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
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
} from './Auth.styled.js';

export default function LoginPage() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const { login: doLogin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  async function handleSubmit(e) {
    e.preventDefault();
    if (isBlank(login) || isBlank(password)) {
      setError('Введите эл. почту и пароль');
      return;
    }

    setError('');
    setSubmitting(true);
    try {
      await doLogin(login.trim(), password);
      navigate(location.state?.from?.pathname || '/', { replace: true });
    } catch (err) {
      setError(err.message || 'Не удалось войти');
      setSubmitting(false);
    }
  }

  return (
    <AuthWrap>
      <AuthBlock>
        <AuthTitle>Вход</AuthTitle>
        <AuthForm onSubmit={handleSubmit} noValidate>
          <Fields>
            <AuthInput
              type="text"
              placeholder="Эл. почта"
              autoComplete="username"
              value={login}
              $invalid={Boolean(error)}
              onChange={(e) => setLogin(e.target.value)}
              disabled={submitting}
            />
            <AuthInput
              type="password"
              placeholder="Пароль"
              autoComplete="current-password"
              value={password}
              $invalid={Boolean(error)}
              onChange={(e) => setPassword(e.target.value)}
              disabled={submitting}
            />
            {error && <AuthError role="alert">{error}</AuthError>}
          </Fields>
          <AuthButton type="submit" disabled={submitting}>
            {submitting ? 'Входим…' : 'Войти'}
          </AuthButton>
          <AuthGroup>
            <p>
              Нужно зарегистрироваться? <Link to="/register">Регистрируйтесь здесь</Link>
            </p>
          </AuthGroup>
        </AuthForm>
      </AuthBlock>
    </AuthWrap>
  );
}
