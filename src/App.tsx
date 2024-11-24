import React from 'react'
import {BrowserRouter as Router, Navigate} from 'react-router-dom';
import {Github, Sun, Moon, AlignJustify, Image, ScrollText, Link as LinkIcon, VenetianMask} from 'lucide-react'
import { ThemeProvider, useTheme } from './context/ThemeContext'
import { cn } from "@/lib/utils.ts";
import DotPattern from "@/components/ui/dot-pattern.tsx";
import {Link, Route, Routes} from "react-router-dom";
import Home from './pages/HomePage/Home.tsx';
import Gallery from "@/pages/GalleryPage/Gallery.tsx";
import Links from "@/pages/LinksPage/Links.tsx";
import About from "@/pages/AboutPage/About.tsx";
import PostPage from "@/pages/PostPage/post.tsx";
import BackToTop from "@/components/ui/back-top.tsx";

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
          <Link to={'/'}>
            <span style={{marginLeft: 20}}>MBSpace</span>
          </Link>
          <div className='menu-items-container'>
            <Link to={'/'}>
              <span className='menu-item'>Posts</span>
            </Link>
            <Link to={'/gallery'}>
              <span className='menu-item'>Gallery</span>
            </Link>
            <Link to={'/links'}>
              <span className='menu-item'>Links</span>
            </Link>
            <Link to={'/about'}>
              <span className='menu-item'>About</span>
            </Link>
          </div>
          <div className='icons-container'>
            <div className='menu-suite' onClick={toggleDropdown}><AlignJustify/></div>
            <Link to={'https://github.com/DDDDanny'} target="_blank">
              <div className='icon-item'><Github/></div>
            </Link>
            <div className='icon-item' onClick={toggleTheme}>
              {isLightTheme ? <Sun/> : <Moon/>}
            </div>
          </div>
        </div>
      </div>
      <div className='dropdown-menu-items-container'>
        <Link to={'/'}>
          <span className='dropdown-menu-item'>
            <ScrollText/>
            <span style={{marginLeft: 20}}>文章 ( Posts )</span>
          </span>
        </Link>
        <Link to={'/gallery'}>
          <span className='dropdown-menu-item'>
            <Image/>
            <span style={{marginLeft: 20}}>图库 ( Gallery )</span>
          </span>
        </Link>
        <Link to={'/links'}>
          <span className='dropdown-menu-item'>
            <LinkIcon/>
            <span style={{marginLeft: 20}}>友链 ( Links )</span>
          </span>
        </Link>
        <Link to={'/about'}>
          <span className='dropdown-menu-item'>
            <VenetianMask/>
            <span style={{marginLeft: 20}}>关于 ( About )</span>
          </span>
        </Link>
      </div>
    </>
  );
}

function RedirectPage() {
  return <Navigate to="/" />;
}

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <Header/>
        <DotPattern className={cn("[mask-image:radial-gradient(circle_at_center,#ffffff50,transparent)]",)}/>
        <div className='container-box'>
          <div id="layout" className='container'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/links" element={<Links />} />
              <Route path="/about" element={<About />} />
              <Route path="/post/:id" element={<PostPage />} />
              <Route path="/post" element={<RedirectPage />} />
            </Routes>
          </div>
        </div>
        <div className='footer-container'>
          <span>Copyright © 2024 MintBlue</span>
          <span>
            <a href="https://beian.miit.gov.cn/" target="_blank">
              蜀ICP备2024110734号-1
            </a>
          </span>
      </div>
      <BackToTop/>
    </Router>
    </ThemeProvider>
  );
};

export default App;
