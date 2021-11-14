import React, { createContext } from 'react';
import useFirebase from '../../hooks/useFirebase'


export const AuthChontext = createContext(null);
const AuthProvider = ({ children }) => {
    const allcontexts = useFirebase()
    return (
        <AuthChontext.Provider value={allcontexts}>
            {children}
        </AuthChontext.Provider>
    );
};

export default AuthProvider;
