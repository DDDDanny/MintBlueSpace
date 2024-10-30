import React from 'react';
import '../assets/styles/home.css'
import BoxReveal from "@/components/ui/box-reveal.tsx";

const HomePage: React.FC = () => {

  return (
    <>
      <div className='home-desc-container'>
        <BoxReveal boxColor={"#FAC145"} duration={0.5}>
          <span className='hello-world-style'>Hello World！👋</span>
        </BoxReveal>
        <BoxReveal boxColor={"#FAC145"} duration={1}>
          <span className='desc-style'>Exploring Every Moment of Life</span>
        </BoxReveal>
      </div>
      <div style={{ display: 'flex', width: '100%', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        <div style={{
          height: 360, backgroundColor: '#ffffff20',
          marginTop: 80, borderRadius: 18, width: 770
        }}></div>
        <div style={{
          minHeight: 360, minWidth: 360, backgroundColor: '#ffffff20',
          marginTop: 80, borderRadius: 18
        }}></div>
      </div>
    </>
  );
};

export default HomePage;
