import './index.css'

import {useEffect, useState} from "react";

const GalleryPage = () => {

  const [galleryImages, setGalleryImages] = useState([])

  // 获取Gallery Image列表
  const getGalleryImagesList = () => {
    fetch('https://conf.mintblue.top/config/gallery.json')
      .then(response => response.json()).then(data => {
      setGalleryImages(data)
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
      img.src = 'https://conf.mintblue.top/gallery/' + imageUrl;
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
