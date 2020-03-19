import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    primary: {
      main: '#2b93b6',
    },
    hover: {
      main: '#34b6cf',
    },
    active: {
      main: '#2f9dc2',
    },
    text: {
      main: '#0d2b36',
    },
    subtitle: {
      main: '#566b72',
    },
    background: {
      main: '#f7f8fa',
    },
    error: {
      main: '#eb5757',
    },
    success: {
      main: '#2ebb7b',
    },
  },
  shadow: {
    header: '0 2px 10px rgba(0, 0, 0, 0.1)',
    hover: '0 0 6px rgba(0, 0, 0, 0.2)',
    dropdown: '0 0 10px rgba(0, 0, 0, 0.1)',
    popup: '0 0 6px rgba(0, 0, 0, 0.2)'
  },
  typography: {
    h1: {
      fontSize: '32px'
    },
    h2: {
      fontSize: '28px'
    },
    h3: {
      fontSize: '24px'
    },
    h4: {
      fontSize: '20px'
    },
    h5: {
      fontSize: '16px'
    },
    h6: {
      fontSize: '14px'
    },
  },

  overrides: {
    MuiButton: {
      contained: {
        backgroundColor: '#2ebb7b',
        color: 'white',
        textDecoration: 'none',
      }
    }
  },
});
