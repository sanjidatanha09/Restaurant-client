/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from 'react';

import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from '../firebase/firebase.config';

export const AuthContext = createContext(null)


const AuthProvider = ({children}) => {
    const auth = getAuth(app) // Initialize auth here
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
     
    const createUser = (email,password) =>{
        return
    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            console.log('current user',currentUser)
            setLoading(false);

        });
        
        return unsubscribe();
        
      
    }, [auth])
    
    const authInfo = {
        user,
        loading,
        createUser

    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children} {/* Render children */}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;