import React from 'react';
import './index.css'
import BoxReveal from "@/components/ui/box-reveal.tsx";
import IconCloud from "@/components/ui/icon-cloud.tsx";
import SparklesText from "@/components/ui/sparkles-text.tsx";
import {CalendarDays, User} from "lucide-react";

const HomePage: React.FC = () => {
  const slugs = [
    "typescript", "javascript", "react", "vuedotjs", "django", "postman",
    "android", "html5", "css3", "nodejs", "redis", "lucide", "gitkraken",
    "express", "playwright", "mysql", "nginx", 'visualstudio', "beekeeperstudio",
    "testcafe", "docker", "git", "jira", "github", "fastapi", "notion",
    "gitlab", "python", "figma", "nestjs", "sass", "less", "vite", "npm",
    "pytest", "go", "openai", "discord", "stackoverflow", "bilibili",
    "wechat", "ios", "apple", "linux", "macos", "jenkins", "webstorm",
    "pinterest", "xiaohongshu", "pnpm", "googlefonts", "antdesign",
  ];
  return (
    <>
      <div style={{display: 'flex', width: '100%', justifyContent: 'space-around', flexWrap: 'wrap'}}>
        <div className='home-introduction-container'>
          <BoxReveal boxColor={"#FAC145"} duration={0.5}>
            <SparklesText text={'Hello World！👋'} className='hello-world-style'/>
          </BoxReveal>
          <BoxReveal boxColor={"#FAC145"} duration={1}>
            <span className='desc-style'>Exploring Every Moment of Life</span>
          </BoxReveal>
          <div style={{marginTop: 20, textIndent: '2rem'}}>
            <BoxReveal boxColor={"#FAC145"} duration={1.2}>
              <span className='desc-second-style'>
                <span>我是</span>
                <span style={{color: '#FAC145'}}>MintBlue</span>
                <span>，一个喜欢前端设计的</span>
                <span className='important-desc'>全栈开发工程师</span>
                <span>。在这里, 我会分享我的经验、实用的工具和一些有趣的东西🎉</span>
              </span>
            </BoxReveal>
          </div>
          <div style={{marginTop: 20}}>
            <BoxReveal boxColor={"#FAC145"} duration={1.5}>
              <span className='desc-second-style'></span>
            </BoxReveal>
          </div>
          <BoxReveal boxColor={"#FAC145"} duration={1}>
            <span className='desc-style'></span>
          </BoxReveal>
        </div>
        <div
          className="flex max-w-lg items-center justify-center overflow-hidden rounded-lg  bg-background px-5 pb-5 pt-15 "
          style={{marginTop: 40}}
        >
          <IconCloud iconSlugs={slugs}/>
        </div>
      </div>
      <div className='posts-main-container'>
        <div className='post-content-container'>
          <div className='post-title-container'>
            <span className='post-title'>培养设计感的4款小游戏</span>
          </div>
          <div className='post-content'>
            <span>
              虽说我是一个测试开发工程师，平时负责写写测试脚本、测试用例、开发开发小工具啥的，
              这些事虽说不算无聊，但它们对我来说只是工作，而我的兴趣爱好更多的是偏向前端开发。
            </span>
          </div>
          <div className='post-author-container'>
            <div className='post-author-item'>
              <User style={{height: 18}}/>
              <span>MintBlue</span>
            </div>
            <div className='post-author-item'>
              <CalendarDays style={{height: 18}}/>
              <span>2024-11-01 15:15:15</span>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
