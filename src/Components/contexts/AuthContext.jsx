import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/firebase.config';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  updateProfile
} from 'firebase/auth';

const AuthContext  = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); 

    // Register function
     const register = async (email, password) => {
        try {
            const userCredential  = await createUserWithEmailAndPassword(auth, email, password);    
            await updateProfile(userCredential.user, {
                displayName: email.split("@")[0], 
            });
            return userCredential;
        } catch (error) {
            console.error("Register error:", error);
        }
    }
    // Login function 
    const login = async (email, password) => {
        try {
            return await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.error("Login error:", error);
        }
    }
    // Logout function
    const logout = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error("Logout error:", error);
        }
    }


    //  
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
        setUser(user);
        setLoading(false);
        });
        return unsubscribe;
    }, [])

    const value = {
        user, 
        loading, 
        login, 
        register,
        logout, 
    }

    return (
        <AuthContext.Provider value={value}>
            { !loading &&  children}
        </AuthContext.Provider>
    )
}