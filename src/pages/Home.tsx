import React from 'react';
import { useTheme } from '../context/ThemeContext';
import '../assets/styles/home.css'

const HomePage: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <div className='home-desc-container' >
        <span className='hello-world-style'>Hello World！👋</span>
        <span className='desc-style'>Exploring Every Moment of Life</span>
      </div>
      <button onClick={toggleTheme}>切换</button>
    </>
  );
};

export default HomePage;
