import './index.css'
import { Link } from 'lucide-react'


const LinksPage = () => {
  return (
    <div className='links-main-layout'>
      <div className='links-desc-container'>
        <Link style={{ minWidth: 17, color: '#FAC145' }}/>
        <span style={{ marginLeft: 10 }}>
          友情链接：大家的博客和个人网站都在这里啦～如果有兴趣交换友链，可以点击这里进行交换～MBSpace欢迎新朋友加入👏
        </span>
      </div>
      <div className='links-items-container'>
        <div className='link-item-container'>
          <img src='src/assets/001.jpeg' alt='Avatar' className='link-item-avatar'/>
          <div className='link-item-blog-info'>
            <span className='link-item-name'>MintBlue</span>
            <span className='link-item-desc'>
              一个有趣的人一个有趣的人一个有趣一个有～
            </span>
          </div>
        </div>
        <div className='link-item-container'>
          <img src='src/assets/001.jpeg' alt='Avatar' className='link-item-avatar'/>
          <div className='link-item-blog-info'>
            <span className='link-item-name'>MintBlue</span>
            <span className='link-item-desc'>
              一个有趣的人一个有趣的人一个有趣一个有～
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LinksPage;