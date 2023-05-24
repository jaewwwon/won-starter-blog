import React from 'react';
import { Link } from 'gatsby';
import './index.scss';

const NotFound = () => {
  return (
    <div className="notice">
      <span className="notice-ico">🤷‍♂️</span>
      <h2 className="notice-title">페이지를 찾을 수 없습니다.</h2>
      <p className="notice-desc">페이지가 존재하지 않거나 삭제되어 찾을 수 없어요.</p>
      <div className="links">
        <Link to="/">홈으로 이동</Link>
      </div>
    </div>
  );
};

export default NotFound;
