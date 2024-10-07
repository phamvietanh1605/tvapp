import React from 'react';
import './Home.scss';
import Header from '../Header';
import listItem from './listItem.json';

const Home = () => {
  return (
    <div className='container'>
      <Header></Header>
      <div className='content'>
        <div className='title'>
          Live TV Channels
        </div>
        <div className='c_body'>
          <div className='cb_wrapper'>
            {listItem.map((item, index) => (
              <div className='cbw_item' key={index}>{index}. {item.name}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
