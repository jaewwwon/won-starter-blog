import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

const PostDetailPage = ({ data, children }) => {
  return (
    <Layout>
      <p>{data.mdx.frontmatter.date}</p>
      {children}
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`;

export const Head = () => <title>글 상세 페이지</title>;

export default PostDetailPage;
