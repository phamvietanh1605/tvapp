import React from 'react';
import './Button.scss';

const Button = ({title='', className='btn_wrapper',size='normal', colorT='', colorBgr='bgr_black' , onClick}) => {
  return (
    <div className='container_btn' onClick={onClick}>
      <div className={`${className} ${size} ${colorT} ${colorBgr}`}>
        {title}
      </div>
    </div>
  )
}

export default Button;
