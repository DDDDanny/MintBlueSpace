import './index.css'
import 'ldrs/helix';
import {CalendarDays, User, ChevronsLeft, ChevronsRight, Sparkles} from "lucide-react";
import React, {useEffect, useState} from "react";
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from "react-markdown";
import { useTheme } from "@/context/ThemeContext.tsx";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

const PostPage = () => {
  const navigate = useNavigate(); // 获取navigate函数
  const [markdown, setMarkdown] = useState('');
  const [postInfo, setPostInfo] = useState({
    title: '', author: 'MintBlue', date: ''
  });
  const { theme } = useTheme(); // 获取当前主题
  const codeStyle = theme === 'dark' ? oneDark : oneLight;
  // 使用 useParams 钩子获取动态路由参数
  const { id } = useParams();

  const [prevID, setPrevID] = useState(null);
  const [nextID, setNextID] = useState(null);

  // 获取前后2页的ID
  const findAdjacentIDs = () => {
    const postList = JSON.parse(localStorage.getItem('POSTS') as string)
    // 找到目标对象的索引
    const index = postList.findIndex(item => item.id === id);

    if (index !== -1) {
      const prevID = index > 0 ? postList[index - 1].id : null; // 前一个ID
      const nextID = index < postList.length - 1 ? postList[index + 1].id : null; // 后一个ID
      setPrevID(prevID);
      setNextID(nextID);
    }
  }

  // 处理跳转
  const goToOtherPost = (id: string) => {
    navigate(`/post/${id}`)
    document.getElementsByClassName('container-box')[0].scrollTo({top: 0})
  }

  useEffect(() => {
    fetch(`https://bucket.mintblue.top/posts/${id}.md `)
      .then(response => response.text())
      .then(data => {
        const info = data.split('<!-- info -->')[0]
        const title = info.split('title: ')[1].split('\n')[0]
        const author = info.split('author: ')[1].split('\n')[0]
        const date = info.split('date: ')[1].split('\n')[0]
        setPostInfo({ title, author, date })
        setMarkdown(data.split('<!-- info -->')[1])
      }).then(() => {
      findAdjacentIDs()
      document.getElementsByClassName('container-box')[0].scrollTo({top: 0})
    })
  }, [id]);

  return (
    <div className='post-page-layout'>
      {
        markdown ? (
          <div className='post-page-container'>
            <span className='post-title'>{postInfo.title}</span>
            <div className='post-desc-container'>
              <div className='post-desc-author'>
                <User style={{height: 14}}/>
                <span>{postInfo.author}</span>
              </div>
              <div className='post-desc-time'>
                <CalendarDays style={{height: 14}}/>
                <span>{postInfo.date}</span>
              </div>
            </div>
            <div className='post-content'>
              <ReactMarkdown
                children={markdown}
                components={{
                  code({node, inline, className, children, ...props}) {
                    const match = /language-(\w+)/.exec(className || '');
                    return !inline && match ? (
                      <div className='code-area-container'>
                        <div className='mac-editor-icons'>
                          <span className='mac-editor-icon' style={{marginLeft: 15, backgroundColor: '#f65f57'}}/>
                          <span className='mac-editor-icon' style={{backgroundColor: '#fabc2f'}}/>
                          <span className='mac-editor-icon' style={{backgroundColor: '#44c840'}}/>
                        </div>
                        <SyntaxHighlighter
                          className='code-container'
                          style={codeStyle}
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
                  img({node, ...props}) {
                    return (
                      <div align={'center'} style={{margin: "20px 0"}}>
                        <img
                          {...props}
                          className='markdown-image-style'
                          loading="lazy" // 启用懒加载
                          alt={props.alt || 'image'}
                        />
                      </div>
                    )
                  },
                  a({node, ...props}) {
                    return (
                      <a {...props} target="_blank"/>
                    )
                  },
                }}
              />
            </div>
            <div className='post-footer-container'>
              <div className='post-footer-item'>
                {
                  prevID ? (
                    <div className='post-footer-item-box' onClick={() => goToOtherPost(prevID)}>
                      <ChevronsLeft/>
                      <span>上一篇</span>
                    </div>
                  ) : (
                    <>
                      <Sparkles style={{width: 21}}/>
                      <span>已经到头啦</span>
                    </>
                  )
                }
              </div>
              <div className='post-footer-item'>
                {
                  nextID ? (
                    <div className='post-footer-item-box' onClick={() => goToOtherPost(nextID)}>
                      <span>下一篇</span>
                      <ChevronsRight/>
                    </div>
                  ) : (
                    <>
                      <Sparkles style={{width: 21}}/>
                      <span>已经到底啦</span>
                    </>
                  )
                }
              </div>
            </div>
          </div>
        ) : (
          <div className='post-loading-container'>
            <l-helix size="45" speed="2.5" color="#FAC145" />
            <span>加载中···</span>
          </div>
        )
      }

    </div>
  );
}

export default PostPage;