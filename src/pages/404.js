import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import NotFound from '../components/not-found';

const NotFoundPage = () => {
  return (
    <Layout>
      <NotFound />
    </Layout>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found | WONLOG</title>;
