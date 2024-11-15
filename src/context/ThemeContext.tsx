import React, { createContext, useContext, useState, ReactNode } from 'react';

// 定义主题上下文的类型
interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

// 创建上下文，初始值为 undefined
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// ThemeProvider 组件，提供主题上下文
export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem('MintBlueSpaceTheme') === 'light' ? 'light' : 'dark'
  )

  // 切换主题的函数
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('MintBlueSpaceTheme', newTheme);
  };

  // 当主题变化时，更新 <html> 元素的 data-theme 属性
  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 自定义 Hook，用于在组件中使用主题上下文
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
