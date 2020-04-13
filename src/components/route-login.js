import React from 'react';
import { useIdentityContext } from 'react-netlify-identity';
import { navigate } from 'gatsby';

const RouteLogin = ({ showModal }) => {
  const identity = useIdentityContext();

  if (identity && identity.isLoggedIn) {
    navigate('/dashboard/secret', { replace: true });
  }

  return (
    <>
      <h1>Log In or Sign Up</h1>
      <button onClick={showModal}>Log In</button>
    </>
  );
};
export default RouteLogin;

// const Login = ({ openLogin }) => {
//   const identity = useIdentityContext();

//   if (identity && identity.isLoggedIn) {
//     navigate('/dashboard/secret', { replace: true });
//   }

//   return (
//     <>
//       <h1>Log In or Sign Up</h1>
//       <button onClick={openLogin}>Log In</button>
//     </>
//   );
// };
