import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signInWithRedirect, signOut, updateProfile } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import axios from "axios";
import { app } from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const updateUser = (name, photourl) => {
        return updateProfile(auth.currentUser, {displayName: name, photoURL: photourl});
    }

    const signin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const logOut = ()=>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false);
            
            // Get set token 
            if(currentUser){
                axios.post(`${import.meta.env.VITE_backend}/jwt`, {email: currentUser.email})
                .then(data=> {
                    localStorage.setItem('token', data.data.token);
                    setLoading(false);
                })
            }
            else{
                localStorage.removeItem('token');
                setLoading(false);
            }

        });
        return () =>{
            return unsubscribe();
        }
    },[setUser])
    const authInfo = {
        user,
        loading,
        createUser,
        updateUser,
        signin,
        signInGoogle,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;