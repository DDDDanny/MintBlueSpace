import { debounce } from 'lodash';
import React, { useState, useEffect } from 'react';
import {ChevronsUp, ChevronUp} from "lucide-react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [element, setElement] = useState<any>(null);

  const interval = setInterval(() => {
    const elementTemp = document.getElementsByClassName('container-box')[0]
    if (elementTemp) {
      clearInterval(interval);
      setElement(elementTemp)
    }
  }, 100);

  const handleScroll = debounce(() => {
    setIsVisible(element.scrollTop > 30);
    console.log(12)
  }, 200)

  // 监听滚动事件，判断滚动位置
  useEffect(() => {
    if (element) {
      element.addEventListener('scroll', handleScroll);
    }
  }, [element]);

  // 滚动到顶部的函数
  const scrollToTop = () => {
    element.scrollTo({top: 0, behavior: 'smooth' });
  };

  return (
    isVisible && (
      <div className='back-to-top-container' onClick={scrollToTop}>
        <ChevronsUp />
      </div>
    )
  );
}

export default BackToTop;
