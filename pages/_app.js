//bootstrap css
import "bootstrap/dist/css/bootstrap.css";
//bootstrap icons css
import "bootstrap-icons/font/bootstrap-icons.css";
//global css
import "../styles/globals.css";

import Head from "next/head";

import { AppProvider } from "../context/context";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
			</Head>
			<AppProvider>
				<div className="container ">
					<Component {...pageProps} />
				</div>
			</AppProvider>
		</>
	);
}

export default MyApp;
