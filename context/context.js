import { createContext, useContext, useState } from "react";
import fetchPosts from "./fetchPosts";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
	const [userIsLogged, setUserIsLogged] = useState(false);

	return (
		<AppContext.Provider
			value={{ fetchPosts, userIsLogged, setUserIsLogged }}>
			{children}
		</AppContext.Provider>
	);
};

export const useAppContext = () => useContext(AppContext);
