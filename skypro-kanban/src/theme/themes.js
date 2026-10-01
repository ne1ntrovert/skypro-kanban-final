const shared = {
  primary: '#565EEF',
  primaryHover: '#33399b',
  danger: '#FF6D6D',
  muted: '#94A6BE',
  border: 'rgba(148, 166, 190, 0.4)',
};

export const lightTheme = {
  name: 'light',
  ...shared,
  pageBg: '#EAEEF6',
  authBg: '#EAEEF6',
  surface: '#FFFFFF',
  surfaceBorder: '#D4DBE5',
  text: '#000000',
  inputBg: '#EAEEF6',
  fieldBg: '#EAEEF6',
  calendarText: '#94A6BE',
  statusActive: { bg: '#94A6BE', color: '#FFFFFF' },
  outline: { color: '#565EEF', hoverBg: '#33399B', hoverColor: '#FFFFFF' },
  overlay: 'rgba(0, 0, 0, 0.4)',
  shadow: 'rgba(0, 0, 0, 0.13)',
  cardShadow: 'rgba(0, 0, 0, 0.06)',
  tones: {
    orange: { bg: '#FFE4C2', color: '#FF6D00' },
    green: { bg: '#B4FDD1', color: '#06B16E' },
    purple: { bg: '#E9D4FF', color: '#9A48F1' },
    gray: { bg: '#94A6BE', color: '#FFFFFF' },
  },
};

export const darkTheme = {
  name: 'dark',
  ...shared,
  pageBg: '#151419',
  authBg: '#20202C',
  surface: '#20202C',
  surfaceBorder: '#4E5566',
  text: '#FFFFFF',
  inputBg: '#151419',
  fieldBg: '#151419',
  calendarText: '#B3BDCC',
  statusActive: { bg: '#94A6BE', color: '#20202C' },
  outline: { color: '#FFFFFF', hoverBg: '#FFFFFF', hoverColor: '#20202C' },
  overlay: 'rgba(0, 0, 0, 0.6)',
  shadow: 'rgba(0, 0, 0, 0.5)',
  cardShadow: 'rgba(0, 0, 0, 0.4)',
  tones: {
    orange: { bg: '#FF6D00', color: '#FFFFFF' },
    green: { bg: '#06B16E', color: '#FFFFFF' },
    purple: { bg: '#9A48F1', color: '#FFFFFF' },
    gray: { bg: '#4E5566', color: '#FFFFFF' },
  },
};

export const themes = { light: lightTheme, dark: darkTheme };
