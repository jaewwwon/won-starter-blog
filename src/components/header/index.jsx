import React from 'react';
import { Link } from 'gatsby';
import './index.scss';

const Header = () => {
  return (
    <header className="header">
      <h1>
        <Link to="/">WONLOG</Link>
      </h1>
      <button type="button">다크모드</button>
    </header>
  );
};

export default Header;
