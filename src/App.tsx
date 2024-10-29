import React from 'react'
import AppRouter from './router'
import { ThemeProvider } from './context/ThemeContext'
import './assets/styles/global.css'

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className='header'>
        <span>MintBlue</span>
      </div>
      <div id="layout" className='container'>
        <div className='content'>
          <AppRouter/>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
