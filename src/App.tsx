import React from 'react'
import AppRouter from './router'
import { ThemeProvider } from './context/ThemeContext'

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className='header'>
        <span>MintBlue</span>
      </div>
      <div id="layout" className='container'>
        <AppRouter/>
      </div>
    </ThemeProvider>
  );
};

export default App;
