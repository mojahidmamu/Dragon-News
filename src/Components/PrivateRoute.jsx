import React from 'react';
import { useAuth } from './contexts/AuthContext';
import { useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {
    const {user, loading} = useAuth();
    const location = useLocation();

   if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  } 

  return children;
};

export default PrivateRoute;