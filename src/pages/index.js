import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import MainCover from '../components/main-cover';
import Contents from '../components/contents';

const MainPage = ({ data }) => {
  const { siteMetadata } = data.site;
  const { nodes } = data.allMdx;

  return (
    <Layout title={siteMetadata.title}>
      <MainCover />
      <Contents posts={nodes} />
    </Layout>
  );
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        categorys
      }
    }
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          title
          date(formatString: "YYYY.MM.DD")
          slug
        }
        id
        excerpt
      }
    }
  }
`;

export default MainPage;

export const Head = () => <title>WONLOG</title>;
