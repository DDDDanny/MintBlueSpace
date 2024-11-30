import './index.css'
import { Link as LinkIcon } from 'lucide-react'
import { Link } from "react-router-dom";
import {useEffect, useState} from "react";
import BlurFade from "@/components/ui/blur-fade.tsx";


const LinksPage = () => {
  const [links, setLinks] = useState([])

  useEffect(() => {
    // 使用 fetch 获取本地 JSON 文件
    fetch('src/config/links.json')  // 加载文件
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // 自动解析为 JSON 对象
      })
      .then(parsedData => setLinks(parsedData)) // 设置解析后的数据
      .catch(error => console.error("Error loading JSON file:", error));
  }, []);

  return (
    <div className='links-main-layout'>
      <div className='links-desc-container'>
        <LinkIcon style={{ minWidth: 17, color: '#FAC145' }}/>
        <span style={{ marginLeft: 10 }}>
          友情链接：这里汇集了大家的个人网站和我常用的一些网站～MBSpace期待新朋友的加入👏
        </span>
      </div>
      <div className='links-items-container'>
        {links.map((linkItem, idx) => (
          <BlurFade delay={0.25 + idx * 0.05} inView key={idx}>
            <Link to={linkItem.linkUrl} target="_blank" rel="noopener noreferrer">
              <div className='link-item-container'>
                <img src={linkItem.imageUrl} alt='Avatar' className='link-item-avatar'/>
                <div className='link-item-blog-info'>
                  <span className='link-item-name'>{linkItem.name}</span>
                  <span className='link-item-desc'>{linkItem.desc}</span>
                </div>
              </div>
            </Link>
          </BlurFade>
        ))}
      </div>
    </div>
  );
}

export default LinksPage;