import './index.css'
import {CalendarDays, User} from "lucide-react";
import React, {useEffect, useState} from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const PostPage = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch('/src/posts/000.md')
      .then(response => response.text())
      .then(data => setMarkdown(data));
  }, []);

  return (
    <div className='post-page-layout'>
      <div className='post-page-container'>
        <span className='post-title'>每日Python小技巧之bytes和str</span>
        <div className='post-desc-container'>
          <div className='post-desc-author'>
            <User style={{height: 14}}/>
            <span>MintBlue</span>
          </div>
          <div className='post-desc-time'>
            <CalendarDays style={{height: 14}}/>
            <span>2024-11-01 15:15:15</span>
          </div>
        </div>
        <div className='post-content'>
          <Markdown>{markdown}</Markdown>
        </div>
      </div>
    </div>
  );
}

export default PostPage;