import { createContext, useContext } from "react";
import fetchPosts from "./fetchPosts";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
	return (
		<AppContext.Provider value={{ fetchPosts }}>
			{children}
		</AppContext.Provider>
	);
};

export const useAppContext = () => useContext(AppContext);
