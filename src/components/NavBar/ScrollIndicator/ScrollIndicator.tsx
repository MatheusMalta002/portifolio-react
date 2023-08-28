import React, { useState, useEffect } from 'react';

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

  return (
    <div className='backdrop-blur-[10px] bg-[#ffffff33] h-[5px] sticky top-0 left-0 z-[99999999] w-full'>
      <div className=''>
        <div
          className='h-[5px] bg-gray-800'
          style={{ width: `${scrollTop}%` }}
        ></div>
      </div>
    </div>
  );
};
