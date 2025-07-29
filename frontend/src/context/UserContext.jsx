import { createContext, useState, useEffect, useContext } from "react";

const UserContext = createContext({
    currentUser: null
});

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
   
   
    useEffect(() => {
    }, []);

    const logout = () => {
        localStorage.removeItem("social-app-token");
        setCurrentUser(null);
    };

    const value = {
        currentUser,
        setCurrentUser,
        loading,
        setLoading,
        logout,
    };
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
        );
}   

// eslint-disable-next-line react-refresh/only-export-components
export const useUser = () => {
    const context = useContext(UserContext);
    return context;
};

export default UserContext;