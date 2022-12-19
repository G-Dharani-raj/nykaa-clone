import React from "react";

export const AuthContext = React.createContext();

const AuthContextProvider = ({ children }) => {
	const [isAuth, setAuth] = React.useState(false);
	const [token, setToken] = React.useState(null);
	const logoutFN = () => {
		setAuth(false);
		setToken(null);
	};
	return (
		<AuthContext.Provider
			value={{ isAuth, token, logoutFN, setToken, setAuth }}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContextProvider;
