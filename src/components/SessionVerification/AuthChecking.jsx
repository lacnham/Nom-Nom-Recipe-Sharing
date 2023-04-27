import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const withAuth = (Component, options = { redirectAuthenticated: true, redirectTo: '/allRecipe' }) => {
  const AuthRoute = (props) => {
    const navigate = useNavigate();
    const { userData } = useContext(AuthContext);

    useEffect(() => {
      if (options.redirectAuthenticated && userData) {
        navigate(options.redirectTo, { replace: true });
      }
    }, [userData, navigate, options.redirectAuthenticated, options.redirectTo]);

    return <Component {...props} />;
  };

  return AuthRoute;
};

const withoutAuth = (Component, options = { redirectUnauthenticated: true }) => {
  const UnauthRoute = (props) => {
    const navigate = useNavigate();
    const { userData } = useContext(AuthContext);

    useEffect(() => {
      if (options.redirectUnauthenticated && !userData) {
        navigate('/login', { replace: true });
      }
    }, [userData, navigate, options.redirectUnauthenticated]);

    return <Component {...props} />;
  };

  return UnauthRoute;
};

export { withAuth, withoutAuth };
