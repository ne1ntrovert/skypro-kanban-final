import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx';
import { useThemeMode } from '../../theme/ThemeContext.jsx';
import {
  Container,
  ExitButton,
  HeaderBlock,
  HeaderRoot,
  Logo,
  Nav,
  NewButton,
  ThemeRow,
  ThemeToggle,
  User,
  UserMail,
  UserMenu,
  UserName,
} from './Header.styled.js';

export default function Header() {
  const { user } = useAuth();
  const { isDark, toggleTheme } = useThemeMode();
  const [menuOpen, setMenuOpen] = useState(false);

  const displayName = user?.name || user?.login || 'Пользователь';

  return (
    <HeaderRoot>
      <Container>
        <HeaderBlock>
          <Logo>
            <Link to="/">
              <img src={isDark ? '/images/logo_dark.png' : '/images/logo.png'} alt="Skypro Kanban" />
            </Link>
          </Logo>
          <Nav>
            <NewButton to="/card/create">
              Создать новую задачу
            </NewButton>
            <User type="button" aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
              {displayName}
            </User>
            {menuOpen && (
              <UserMenu>
                <UserName>{displayName}</UserName>
                {user?.login && <UserMail>{user.login}</UserMail>}
                <ThemeRow>
                  <p>Тёмная тема</p>
                  <ThemeToggle checked={isDark} onChange={toggleTheme} aria-label="Тёмная тема" />
                </ThemeRow>
                <ExitButton to="/exit">
                  Выйти
                </ExitButton>
              </UserMenu>
            )}
          </Nav>
        </HeaderBlock>
      </Container>
    </HeaderRoot>
  );
}
