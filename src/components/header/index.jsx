import { Link } from 'gatsby';
import './index.scss';

const Header = ({ title }) => {
  return (
    <header className="header">
      <h1>
        <Link to="/">{title}</Link>
      </h1>
      <button type="button">다크모드</button>
    </header>
  );
};

export default Header;
