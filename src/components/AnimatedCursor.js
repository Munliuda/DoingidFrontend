import React, { useState, useEffect } from 'react';
// import './AnimatedCursor.css';

const AnimatedCursor = () => {
//   const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });

const onMouseMove = (e) => {
      var cursor = document.querySelector(" .cursor");
      var cursor2 = document.querySelector(" .cursor2");
    // const { pageX: x, pageY: y } = e;
    // setCursorPos({ x, y });
        cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px;  top: " + e.clientY  + "px;";
  };

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <>
        {/* <div
            className="animated-cursor" 
            style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
        /> */}
        <div className='cursor'></div>
        <div className='cursor2'></div>
    </>
  );
};

export default AnimatedCursor;