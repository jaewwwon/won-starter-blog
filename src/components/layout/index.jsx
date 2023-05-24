import Header from '../header';
import './index.scss';

function Layout({ children, title }) {
  return (
    <div>
      <Header title={title} />
      <main className="main">{children}</main>
    </div>
  );
}

export default Layout;
