import React from 'react'
import AppRouter from './router'
import {Github, Sun, Moon, AlignJustify, Home, ScrollText, Link, VenetianMask} from 'lucide-react'
import { ThemeProvider, useTheme } from './context/ThemeContext'
import {cn} from "@/lib/utils.ts";
import DotPattern from "@/components/ui/dot-pattern.tsx";

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme(); // 在 ThemeProvider 内部使用
  const isLightTheme = theme === 'light'; // 根据主题设置布尔值

  const toggleDropdown = (event: any) => {
    const dropdownContent = document.querySelector('.dropdown-menu-items-container');
    dropdownContent.classList.toggle('show');
    event.stopPropagation(); // 阻止事件冒泡
  }

  // 点击空白处关闭下拉菜单
  document.addEventListener('click', function() {
    const dropdownContent = document.querySelector('.dropdown-menu-items-container');
    if (dropdownContent.classList.contains('show') ) {
      dropdownContent.classList.remove('show');
    }
  });

  return (
    <>
      <div className='header'>
        <div className='header-content'>
          <span style={{marginLeft: 20}}>MBSpace</span>
          <div className='menu-items-container'>
            <span className='menu-item'>Home</span>
            <span className='menu-item'>Posts</span>
            <span className='menu-item'>Links</span>
            <span className='menu-item'>About</span>
          </div>

          <div className='icons-container'>
            <div className='menu-suite' onClick={toggleDropdown}><AlignJustify/></div>
            <div className='icon-item'><Github/></div>
            <div className='icon-item' onClick={toggleTheme}>
              {isLightTheme ? <Sun/> : <Moon/>}
            </div>
          </div>
        </div>
      </div>
      <div className='dropdown-menu-items-container'>
        <span className='dropdown-menu-item'>
          <Home />
          <span style={{ marginLeft: 20 }}>首页 ( Home )</span>
        </span>
        <span className='dropdown-menu-item'>
          <ScrollText/>
          <span style={{marginLeft: 20}}>文章 ( Posts )</span>
        </span>
        <span className='dropdown-menu-item'>
          <Link/>
          <span style={{marginLeft: 20}}>友链 ( Links )</span>
        </span>
        <span className='dropdown-menu-item'>
          <VenetianMask/>
          <span style={{marginLeft: 20}}>关于 ( About )</span>
        </span>
      </div>
    </>

  );
}

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Header/>
      {/*<DotPattern className={cn("[mask-image:radial-gradient(circle_at_center,#ffffff50,transparent)]",)}/>*/}
      <div id="layout" className='container'>
        <DotPattern className={cn("[mask-image:radial-gradient(circle_at_center,#ffffff50,transparent)]",)}/>
        <AppRouter/>
      </div>
    </ThemeProvider>
  );
};

export default App;
