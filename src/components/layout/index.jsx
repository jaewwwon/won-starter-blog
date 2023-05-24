import React from 'react';
import Header from '../header';
import './index.scss';

function Layout({ children }) {
  return (
    <div>
      <Header />
      <main className="main">{children}</main>
    </div>
  );
}

export default Layout;
