import React from 'react';
import { navigate } from 'gatsby';
import { Router } from '@reach/router';
import Layout from '../components/layout';
import Profile from '../components/profile';
import PrivateRoute from '../components/private-route';
import RouteBase from '../components/route-base';
import RouteSecret from '../components/route-secret';
import RouteLogin from '../components/route-login';

import IdentityModal from 'react-netlify-identity-widget';
import 'react-netlify-identity-widget/styles.css';
import '@reach/tabs/styles.css';

const Dashboard = ({ location }) => {
  const [isVisible, setVisibility] = React.useState(false);

  const showModal = () => setVisibility(true);

  React.useEffect(() => {
    if (location.pathname.match(/^\/dashboard\/?$/)) {
      navigate('dashboard/login', { replace: true });
    }
  }, [location.pathname]);

  return (
    <Layout>
      <Profile showModal={showModal} />
      <Router>
        <RouteLogin path="/dashboard/login" showModal={showModal} />
        <PrivateRoute path="/dashboard/base" component={RouteBase} />
        <PrivateRoute path="/dashboard/secret" component={RouteSecret} />
      </Router>
      <IdentityModal
        showDialog={isVisible}
        onCloseDialog={() => setVisibility(false)}
      />
    </Layout>
  );
};
export default Dashboard;
