import { createContext, useContext, useState } from "react";


const GoogleAuthContext = createContext();

const AuthProvider = ({children}) => {
    const [Gauth, setGauth] = useState({
        token : ''
    });

    return (
        <GoogleAuthContext.Provider value={[Gauth, setGauth]}>
            {children}
        </GoogleAuthContext.Provider>
    )
};

const useAuth = () => {
    return useContext(GoogleAuthContext);
}

export {useAuth, AuthProvider}

