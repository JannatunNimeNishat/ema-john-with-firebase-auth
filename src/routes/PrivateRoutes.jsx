import React, { useContext } from 'react';
import { AuthContext } from '../components/providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContext);

    //storing the intended route that user wants to go
    const location = useLocation();
    console.log(location);

    if(loading){
        return <div>Loading</div>
    }
    if(user){
        return children;
    }
    return  <Navigate to='/login' state={{from:location}}></Navigate>
    
};

export default PrivateRoutes;