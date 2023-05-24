import React from 'react';
import { Link } from 'gatsby';
import './index.scss';

const Contents = ({ posts }) => {
  return (
    <div className="content">
      <ul className="post-list">
        {posts.map((node) => (
          <li key={node.id}>
            <Link to={`/${node.frontmatter.slug}`}>
              <p className="date">{node.frontmatter.date}</p>
              <p className="title">{node.frontmatter.title}</p>
              <p className="desc">{node.excerpt}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contents;
