import React, { useEffect, useState } from 'react';
import Draggable from 'react-draggable';

const Modal = ({ children }) => {
  const [deviceType, setDeviceType] = useState("");

  useEffect(() => {
    const checkDeviceType = () => {
      setDeviceType(window.innerWidth <= 768 ? "mobile" : "laptop");
    };
    checkDeviceType();
  }, []);

  return (
    <div className='fixed z-[1000000] inset-0 overflow-y-auto h-screen w-screen flex justify-center items-center'>
    {
      deviceType === "mobile" ? (
        <div style={{ boxShadow: `rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px`, cursor: '-webkit-grab', cursor: 'grab' }} className={`pb-4 bg-white rounded opacity-100 shadow-2xl z-[1000000000000]`}>
          {children}
        </div>
      ):(
        <Draggable>
        <div style={{ boxShadow: `rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px`, cursor: '-webkit-grab', cursor: 'grab' }} className={`pb-4 bg-white rounded opacity-100 shadow-2xl z-[1000000000000]`}>
          {children}
        </div>
      </Draggable>
      )
    }
    </div>
  );
};

export default Modal;
