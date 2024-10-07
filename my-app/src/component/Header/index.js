import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import Button from '../Button';

const Header = () => {
  return (
    <div className='container_header'>
        <div className='header_wrapper'>
            <div className='navbar_brand'>
                <Link>
                    <img src="https://thetvapp.to/img/TheTVApp.svg" class="img_title_header" alt=""/>
                </Link>
            </div>
            <div className='navbar_list'>
                <div className='nl_wrapper'>
                    <div className='nlw_item'>Home</div>
                    <div className='nlw_item'>LiveTV</div>
                    <div className='nlw_item'>NBA</div>
                    <div className='nlw_item'>MLB</div>
                    <div className='nlw_item'>NHL</div>
                    <div className='nlw_item'>NFL</div>
                </div>
            </div>
            <div className='navbar_actions'>
                <Button title='Contact Us' colorT='white'/>
                <Button title='Join Our Discord' colorT='white' colorBgr='bgr_green'/>
            </div>
            <div className='navbar_btn_end'>
                <Button title='Subscription' colorBgr='bgr_yellow'/>
            </div>
        </div>
    </div>
  )
}

export default Header;
