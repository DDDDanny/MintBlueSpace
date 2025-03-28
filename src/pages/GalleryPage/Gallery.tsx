import './index.css'

import {useEffect, useState} from "react";

const GalleryPage = () => {

  const [galleryImages, setGalleryImages] = useState([])

  //  Fisher-Yates 洗牌算法
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      // 随机索引
      const randomIndex = Math.floor(Math.random() * (i + 1));
      // 交换元素
      [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }
    return array;
  }

  // 获取Gallery Image列表
  const getGalleryImagesList = () => {
    fetch('https://bucket.mintblue.top/config/gallery.json').then(response =>
      response.json()
    ).then(data => {
      const newData = shuffleArray(data)
      setGalleryImages(newData)
    });
  }

  // 创建Image Node
  const createImageNode = () => {
    const gallery = document.querySelector('.images-container');
    gallery.innerHTML = ''

    // 动态添加图片
    galleryImages.forEach((imageUrl, index) => {
      const item = document.createElement('div');
      item.className = 'images-container-box';
      item.style.animationDelay = `${index * 0.1}s`;

      const img = document.createElement('img');
      img.className = 'gallery-image'
      img.src = imageUrl;
      img.alt = imageUrl;

      item.appendChild(img);
      gallery.appendChild(item);
    });
  }

  useEffect(() => {
    getGalleryImagesList()
  }, []);

  useEffect(() => {
    createImageNode()
  }, [galleryImages]);

  return (
    <div className='gallery-main-layout'>
      <div className='images-container'></div>
    </div>
  );
}

export default GalleryPage;
