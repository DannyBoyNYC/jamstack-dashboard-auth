import React from 'react';
import { useIdentityContext } from 'react-netlify-identity-widget';
import { Link } from 'gatsby';

const Profile = ({ showModal }) => {
  const identity = useIdentityContext();
  const isLoggedIn = identity && identity.isLoggedIn;

  const name =
    identity &&
    identity.user &&
    identity.user.user_metadata &&
    identity.user.user_metadata.full_name;

  console.log(identity);
  return (
    <div className="dashboard-header">
      <nav>
        <Link to="/dashboard/secret" activeClassName="active">
          Secret Stuff
        </Link>
        <Link to="/dashboard/base" activeClassName="active">
          See Your Base
        </Link>
      </nav>
      <span>
        Logged in as {name}. <button onClick={showModal}>Log Out</button>
      </span>
    </div>
  );
};

export default Profile;
