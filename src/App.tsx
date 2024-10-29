import React from 'react'
import AppRouter from './router'
import { ThemeProvider } from './context/ThemeContext'
import './assets/styles/global.css'

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div id="layout">
        <AppRouter />
      </div>
    </ThemeProvider>
  );
};

export default App;
