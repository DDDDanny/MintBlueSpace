import './index.css'
import BlurFade from "@/components/ui/blur-fade.tsx";

import {useEffect, useState} from "react";

const GalleryPage = () => {

  const [images, setImages] = useState([]);

  useEffect(() => {
    // 使用 fetch 获取本地 JSON 文件
    fetch('src/pages/GalleryPage/imagesList.json')  // 加载文件
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // 自动解析为 JSON 对象
      })
      .then(parsedData => setImages(parsedData)) // 设置解析后的数据
      .catch(error => console.error("Error loading JSON file:", error));
  }, []);

  return (
    <div className='gallery-main-layout'>
      <section id="photos" style={{ marginBottom: '2rem' }}>
        <div className="columns-2 gap-4 sm:columns-3">
          {images.map((imageUrl, idx) => (
            <BlurFade delay={0.25 + idx * 0.05} inView key={ idx }>
              <img
                className="mb-4 size-full rounded-lg object-contain gallery-image"
                src={imageUrl}
                alt={`Random stock image ${idx + 1}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
    </div>
  );
}

export default GalleryPage;
