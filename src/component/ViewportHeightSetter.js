'use client';

import { useEffect } from 'react';

export default function ViewportHeightSetter() {
  useEffect(() => {
    const setVH = () => {
      // const vh = window.innerHeight * 0.01;  // 1% of the window height
      const vh = window.innerHeight * 0.02; // 2% بدلاً من 1%

      document.documentElement.style.setProperty('--vh', `${vh}px`);
      console.log("ViewportHeightSetter is running");
      console.log(`Current vh: ${vh}px`);

    };

    setVH();
    window.addEventListener('resize', setVH);
    

    return () => window.removeEventListener('resize', setVH);
    
  }, []);

  return null; // لا يعرض أي شيء
}
