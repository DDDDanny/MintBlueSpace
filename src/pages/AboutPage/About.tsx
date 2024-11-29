import '../AboutPage/index.css'
import BoxReveal from "@/components/ui/box-reveal.tsx";
import {useEffect} from "react";

const AboutPage = () => {
  const aboutMeContent = "我是MintBlue。一个喜欢前端设计的测试开发工程师，" +
    "也是一个被测试耽误的全栈开发"
  const aboutMBSpaceContent = "MintBlue Space，是我独立设计和编写的个人网站。" +
    "其实我很早就想做一个属于自己的个人网站了，之前用过Hexo搭建过，但我始终觉得差点意思, " +
    "于是我就自己动手写了一个，MintBlue Space就此诞生。" +
    "它可能不完美，但它独一无二！"

  useEffect(() => {
    document.getElementsByClassName('container-box')[0].scrollTo({top: 0})
  }, []);

  return (
    <div className="about-page-main-container">
      <div className='about-page-main' >
        <BoxReveal boxColor={"#FAC145"} duration={0.5}>
          <span className="about-page-title">关于MBSpace</span>
        </BoxReveal>
        <BoxReveal boxColor={"#FAC145"} duration={0.6}>
          <span className="about-page-content">
            {aboutMBSpaceContent}
          </span>
        </BoxReveal>
        <div className='about-mbspace-content'>
          <img src='/logo1.png' alt='Avatar' style={{ width: 48, height: 48 }} />
          <span style={{ marginTop: 20 }}>MintBlue Space</span>
        </div>
        <BoxReveal boxColor={"#FAC145"} duration={0.7}>
          <span className="about-page-title" style={{marginTop: 50}}>关于我</span>
        </BoxReveal>
        <BoxReveal boxColor={"#FAC145"} duration={0.8}>
          <span className="about-page-content">{aboutMeContent}</span>
        </BoxReveal>
      </div>
    </div>
  );
}

export default AboutPage;
