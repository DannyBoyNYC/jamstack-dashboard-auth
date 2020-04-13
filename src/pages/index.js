import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default () => (
  <Layout>
    <h1>This app rulez</h1>
    <p>Log in to find out why.</p>
    <Link to="/dashboard">Go tot eh dashboard.</Link>
  </Layout>
);
