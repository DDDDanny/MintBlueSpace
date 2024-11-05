import React from 'react';
import './index.css'
import BoxReveal from "@/components/ui/box-reveal.tsx";
import IconCloud from "@/components/ui/icon-cloud.tsx";
import SparklesText from "@/components/ui/sparkles-text.tsx";

const HomePage: React.FC = () => {
  const slugs = [
    "typescript", "javascript", "react", "vuedotjs", "django",
    "android", "html5", "css3", "nodejs", "redis", "lucide",
    "express", "playwright", "mysql", "nginx", 'visualstudio',
    "testcafe", "docker", "git", "jira", "github", "fastapi",
    "gitlab", "python", "figma", "nestjs", "sass", "less",
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
        <div className='post-content-container'></div>
      </div>
    </>
  );
};

export default HomePage;
