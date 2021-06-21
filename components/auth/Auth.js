import React, { useEffect } from "react";
import { Login } from "..";
import { useAppContext } from "../../context/context";

const IsLogged = ({ children }) => {
	const { userIsLogged, setUserIsLogged } = useAppContext();

	let tokenLocalStorage = "";
	if (typeof window !== "undefined") {
		tokenLocalStorage = localStorage.getItem("token");
	}

	useEffect(() => {
		if (tokenLocalStorage === process.env.NEXT_PUBLIC_TOKEN) {
			setUserIsLogged(true);
		}
	}, []);

	return <>{userIsLogged ? children : <Login />}</>;
};

export default IsLogged;
