import './index.css'
import {Tag} from "lucide-react";

const PostsPage = () => {
  return (
    <div className='posts-page-layout'>
      <div className='posts-tags-container'>
        <span style={{ fontSize: 20,marginBottom: 5}}>Tags</span>
        <div className='posts-tags-box'>
          <div className='tag-item-box'>
            <Tag style={{height: 15, marginRight: 3}}/>
            <span>精选</span>
          </div>
          <div className='tag-item-box'>
            <Tag style={{height: 15, marginRight: 3}}/>
            <span>Python</span>
          </div>
          <div className='tag-item-box'>
            <Tag style={{height: 15, marginRight: 3}}/>
            <span>Vue</span>
          </div>
          <div className='tag-item-box'>
            <Tag style={{height: 15, marginRight: 3}}/>
            <span>React</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostsPage;