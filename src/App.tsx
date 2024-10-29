import React from 'react'
import AppRouter from './router'
import { Github, Sun, Moon } from 'lucide-react'
import { ThemeProvider, useTheme } from './context/ThemeContext'

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme(); // 在 ThemeProvider 内部使用
  const isLightTheme = theme === 'light'; // 根据主题设置布尔值

  return (
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
          <div className='icon-item'><Github /></div>
          <div className='icon-item' onClick={toggleTheme}>
            {isLightTheme ? <Sun /> : <Moon />}
          </div>
        </div>
      </div>
    </div>
  );
}

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Header />
      <div id="layout" className='container'>
        <AppRouter/>
      </div>
    </ThemeProvider>
  );
};

export default App;
