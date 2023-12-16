import { createContext, useContext, useState, useEffect } from "react";

const TokenContext = createContext();

export function useToken() {
    return useContext(TokenContext);
}

export default function TokenProvider({ children }) {
    const [token, setToken] = useState(null);

    useEffect(() => {
        const _token = localStorage.getItem('token');
        if (token !== undefined && token) {
            setToken(_token);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('token', token);
    }, [token]);

    return (
        <TokenContext.Provider value={[token, setToken]}>
            {children}
        </TokenContext.Provider>
    )
}