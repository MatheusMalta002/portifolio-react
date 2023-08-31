import React, { useState, useEffect } from 'react';
import { useTheme } from '../../../hooks/useTheme';

export const ScrollIndicator: React.FC = () => {
  const [scrollTop, setScrollTop] = useState(0);

  function onScroll() {
    const windowScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = (windowScroll / height) * 100;

    setScrollTop(scrolled);
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const {theme, setTheme} = useTheme()

  return (
    <div className='backdrop-blur-[10px] bg-[#ffffff33] h-[5px] sticky top-0 left-0 z-[99999999] w-full'>
      <div className=''>
        <div
          className={`h-[5px] ${theme === "light" ? ' bg-light-typewriter' : 'bg-dark-typewriter'}`}
          style={{ width: `${scrollTop}%` }}
        ></div>
      </div>
    </div>
  );
};
