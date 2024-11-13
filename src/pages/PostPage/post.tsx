import './index.css'
import {CalendarDays, User} from "lucide-react";
import React, {useEffect, useState} from "react";
import ReactMarkdown from "react-markdown";
import { useTheme } from "@/context/ThemeContext.tsx";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

const PostPage = () => {
  const [markdown, setMarkdown] = useState('');
  const [postInfo, setPostInfo] = useState({
    title: '', author: 'MintBlue', date: ''
  });
  const { theme } = useTheme(); // 获取当前主题
  const codeStyle = theme === 'dark' ? oneDark : oneLight;

  useEffect(() => {
    fetch('/src/posts/000.md')
      .then(response => response.text())
      .then(data => {
        const info = data.split('<!-- info -->')[0]
        const title = info.split('title: ')[1].split('\n')[0]
        const author = info.split('author: ')[1].split('\n')[0]
        const date = info.split('date: ')[1].split('\n')[0]
        setPostInfo({ title, author, date })
        setMarkdown(data.split('<!-- info -->')[1])
      });
  }, []);

  return (
    <div className='post-page-layout'>
      <div className='post-page-container'>
        <span className='post-title'>{ postInfo.title }</span>
        <div className='post-desc-container'>
          <div className='post-desc-author'>
            <User style={{height: 14}}/>
            <span>{ postInfo.author }</span>
          </div>
          <div className='post-desc-time'>
            <CalendarDays style={{height: 14}}/>
            <span>{ postInfo.date }</span>
          </div>
        </div>
        <div className='post-content'>
          <ReactMarkdown
            children={markdown}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '');
                return !inline && match ? (
                  <div className='code-area-container'>
                    <div className='mac-editor-icons'>
                      <span className='mac-editor-icon' style={{ marginLeft: 15, backgroundColor: '#f65f57' }} />
                      <span className='mac-editor-icon' style={{ backgroundColor: '#fabc2f' }} />
                      <span className='mac-editor-icon' style={{ backgroundColor: '#44c840' }} />
                    </div>
                    <SyntaxHighlighter
                      className='code-container'
                      style={ codeStyle }
                      language={match[1]}
                      PreTag="div"
                      {...props}
                    >
                      {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                  </div>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default PostPage;