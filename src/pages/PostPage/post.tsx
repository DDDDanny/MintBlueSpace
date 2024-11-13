import './index.css'
import {CalendarDays, User} from "lucide-react";
import React, {useEffect, useState} from "react";
import ReactMarkdown from "react-markdown";
import { useTheme } from "@/context/ThemeContext.tsx";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

const PostPage = () => {
  const [markdown, setMarkdown] = useState('');
  const { theme } = useTheme(); // 获取当前主题
  const codeStyle = theme === 'dark' ? oneDark : oneLight;

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
          <ReactMarkdown
            children={markdown}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '');
                return !inline && match ? (
                  <div className='code-area-container'>
                    <div className='mac-editor-icons'>
                      <span className='mac-editor-icon' style={{ marginLeft: 15, backgroundColor: '#f65f57' }}></span>
                      <span className='mac-editor-icon' style={{ backgroundColor: '#fabc2f' }}></span>
                      <span className='mac-editor-icon' style={{ backgroundColor: '#44c840' }}></span>
                    </div>
                    <SyntaxHighlighter
                      className='xxx'
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