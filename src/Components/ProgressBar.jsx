import React, { useEffect, useState } from 'react';

const ProgressBar = () => {
  const [scroll, setScroll] = useState(0);
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    const totalScroll = document.documentElement.scrollTop;
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = `${totalScroll / windowHeight}`;

    setScroll(scrollPercent);

    if (window.scrollY > 222) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="progress" role="progressbar" aria-label="Example 1px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ height: '2px', position: isSticky ? 'fixed' : 'relative', top: isSticky ? 60 : 'auto', left: isSticky ? 0 : 'auto', width: '100%', zIndex: 9999 }}>
      <div className="progress-bar" style={{ width: `${scroll * 100}%` }}></div>
    </div>
  );
};

export default ProgressBar;