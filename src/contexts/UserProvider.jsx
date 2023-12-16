import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export function useUser() {
	return useContext(UserContext);
}

export default function UserProvider({ children }) {
	const [user, setUser] = useState(null);

	useEffect(() => {
		const _user = JSON.parse(localStorage.getItem("user"));
		setUser(_user);
	}, []);

	function setUserWrapper(_user) {
		localStorage.setItem("user", JSON.stringify(_user));
		setUser(_user);
	}

	return <UserContext.Provider value={[user, setUserWrapper]}>{children}</UserContext.Provider>;
}
