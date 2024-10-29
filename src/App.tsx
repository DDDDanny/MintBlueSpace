import React from 'react'
import AppRouter from './router'
import {Github, Sun} from 'lucide-react'
import { ThemeProvider } from './context/ThemeContext'

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className='header'>
        <div className='header-content'>
          <span>MintBlue</span>
          <div className='menu-items-container'>
            <span className='menu-item'>Home</span>
            <span className='menu-item'>Posts</span>
            <span className='menu-item'>Links</span>
            <span className='menu-item'>About</span>
          </div>
          <div className='icons-container'>
            <div className='icon-item'><Github/></div>
            <div className='icon-item'><Sun/></div>
          </div>
        </div>
      </div>
      <div id="layout" className='container'>
        <AppRouter/>
      </div>
    </ThemeProvider>
  );
};

export default App;
