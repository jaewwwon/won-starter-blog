import React from 'react';
import './index.scss';

const MainCover = () => {
  return (
    <div className="main-cover">
      <img className="main-cover--thumb" src="/static/main-thumb.jpg" alt="" />
      <p className="main-cover--title">😃 잊지 않기 위해 기록하자 🙌</p>
    </div>
  );
};

export default MainCover;
