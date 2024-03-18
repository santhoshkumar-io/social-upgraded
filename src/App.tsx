import React from 'react';
import './App.css';
import HomeComponent from './components/HomeComponent';
import theme from './styles/theme';
import { ThemeProvider } from '@mui/material/styles';
import GoogleFontLoader from 'react-google-font-loader';

function App() {
  return (
    <div className="App">
          <GoogleFontLoader
      fonts={[
        {
          font: 'Inter',
          weights: [200,400, 500,700],
        },
        {
          font: 'sans-serif',
          weights: [200,400, 500,700],
        },
      ]}
    />
            <ThemeProvider theme={theme}>
            <HomeComponent />
      </ThemeProvider>
    </div>
  );
}

export default App;
