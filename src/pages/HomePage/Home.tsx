import React, { useEffect, useState } from 'react';
import './index.css'
import BoxReveal from "@/components/ui/box-reveal.tsx";
import IconCloud from "@/components/ui/icon-cloud.tsx";
import SparklesText from "@/components/ui/sparkles-text.tsx";
import { CalendarDays, User } from "lucide-react";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  const slugs = [
    "typescript", "javascript", "react", "vuedotjs", "django", "postman",
     "html5", "css3", "redis", "lucide",  "mongodb", "express", "mysql",
    "nginx",  "beekeeperstudio", "testcafe", "docker", "git", "jira",
    "github", "fastapi", "notion", "gitlab", "python", "figma", "nestjs",
    "sass","vite", "npm", "pytest", "go", "openai", "discord",  "bilibili",
    "linux", "jenkins", "grafana", "flask", "stackoverflow",
    "xiaohongshu", "pnpm", "antdesign",
  ];

  const [postsList, setPostsList] = useState([]);

  // 获取文章列表
  const getPostsList = () => {
    fetch('https://conf.mintblue.top/config/posts.json')
      .then(response => response.json()).then(data => {
        setPostsList(data)
      });
  }

  useEffect(() => {
    getPostsList()
  }, []);

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
                <span className='important-desc'>测试开发工程师</span>
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
        {
          postsList.map((post, index) => (
            <div className='post-content-container' key={index}>
              <div className='post-title-container'>
                <Link to={`/post/${post.id}`}>
                  <span className='post-title'>{ post.title }</span>
                </Link>
              </div>
              <div className='post-content'>
                <span>{ post.desc }</span>
              </div>
              <div className='post-author-container'>
                <div className='post-author-item'>
                  <User style={{height: 18}}/>
                  <span>{ post.author }</span>
                </div>
                <div className='post-author-item'>
                  <CalendarDays style={{height: 18}}/>
                  <span>{ post.date }</span>
                </div>

              </div>
            </div>
          ))
        }
      </div>
    </>
  );
};

export default HomePage;
