import { createContext, useContext, useState, useEffect } from "react";

const TokenContext = createContext();

export function useToken() {
	return useContext(TokenContext);
}

export default function TokenProvider({ children }) {
	const [token, setToken] = useState(null);

	useEffect(() => {
		const _token = localStorage.getItem("token");
		setToken(_token);
	}, []);

	function setTokenWrapper(_token) {
		localStorage.setItem("token", _token);
		setToken(_token);
	}

	return <TokenContext.Provider value={[token, setTokenWrapper]}>{children}</TokenContext.Provider>;
}
