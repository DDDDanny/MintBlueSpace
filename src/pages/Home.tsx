import React from 'react';
import { useTheme } from '../context/ThemeContext';

const HomePage: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header>
      <h1>我的博客</h1>
      <button onClick={toggleTheme}>
        切换到 {theme === 'light' ? '暗黑' : '亮白'} 主题
      </button>
    </header>
  );
};

export default HomePage;
