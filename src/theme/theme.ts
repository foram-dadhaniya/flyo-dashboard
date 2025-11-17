import { createTheme } from '@mui/material/styles';

// LIGHT THEME
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#00bfa5', // Teal accent
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#1976d2', // Indigo accent
      contrastText: '#ffffff',
    },
    background: {
      paper: '#ffffff',   // Used for cards, AppBar, etc.
      default: '#f5f7fa', // Main background
    },
    text: {
      primary: '#1e1e2f',
      secondary: '#555770',
    },
  },
  spacing: 8, // base spacing: 8px
  typography: {
    fontFamily: 'Inter, Arial, sans-serif',
    h6: {
      fontWeight: 600,
    },
    body1: {
      fontSize: '0.95rem',
    },
  },
  shape: {
    borderRadius: 8, // default border radius for cards, buttons
  },
});

// DARK THEME
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00bfa5',
      contrastText: '#000000',
    },
    secondary: {
      main: '#90caf9',
      contrastText: '#000000',
    },
    background: {
      paper: '#1e1e2f',   // Card and AppBar background
      default: '#121212', // Main dashboard background
    },
    text: {
      primary: '#ffffff',
      secondary: '#cfcfcf',
    },
  },
  spacing: 8,
  typography: {
    fontFamily: 'Inter, Arial, sans-serif',
    h6: {
      fontWeight: 600,
    },
    body1: {
      fontSize: '0.95rem',
    },
  },
  shape: {
    borderRadius: 8,
  },
});
