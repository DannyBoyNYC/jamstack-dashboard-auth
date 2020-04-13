import React from 'react';
import { IdentityContextProvider } from 'react-netlify-identity-widget';
import 'react-netlify-identity-widget/styles.css';
import { Link } from 'gatsby';
import './layout.css';

const Layout = ({ children }) => {
  return (
    <IdentityContextProvider url="https://lengstorf-jamstack-into-auth.netlify.com">
      <header>
        <Link to="/">JAMERZ app</Link>
      </header>
      <main>{children}</main>
    </IdentityContextProvider>
  );
};

export default Layout;