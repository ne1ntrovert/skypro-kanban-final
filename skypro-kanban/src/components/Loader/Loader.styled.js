import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
`;

const shimmer = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: calc(200px + 100%) 0; }
`;

export const LoaderWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 40px 0;
  ${({ $fullscreen }) => $fullscreen && 'min-height: 100vh;'}
`;

export const Ring = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 4px solid ${({ theme }) => theme.border};
  border-top-color: ${({ theme }) => theme.primary};
  border-right-color: ${({ theme }) => theme.primary};
  animation: ${spin} 0.9s linear infinite;
`;

export const LoaderLabel = styled.p`
  color: ${({ theme }) => theme.muted};
  font-size: 14px;
  animation: ${pulse} 1.5s ease-in-out infinite;
`;

export const SkeletonColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 0;
`;

export const SkeletonBlock = styled.div`
  height: 130px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.surface};
  background-image: linear-gradient(
    90deg,
    transparent,
    ${({ theme }) => theme.border},
    transparent
  );
  background-repeat: no-repeat;
  background-size: 200px 100%;
  animation: ${shimmer} 1.4s ease-in-out infinite;
  animation-delay: ${({ $delay = 0 }) => $delay}s;
`;
