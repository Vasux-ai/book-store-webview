import { createContext, useContext } from "react";
import { auth } from "../firebase/firebase.config";
import { useState } from "react";

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const registeruser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const value = {
        currentUser,
        registeruser
        
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}