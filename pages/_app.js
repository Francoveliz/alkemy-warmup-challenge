import Head from "next/head";
import { Navbar } from "../components";
import { AppProvider } from "../context/context";
//bootstrap css
import "bootstrap/dist/css/bootstrap.css";
//bootstrap icons css
import "bootstrap-icons/font/bootstrap-icons.css";
//global css
import "../styles/globals.css";

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
				<Navbar />
				<div data-mdb-perfect-scrollbar="true" className="container py-5 ">
					<Component {...pageProps} />
				</div>
			</AppProvider>
		</>
	);
}

export default MyApp;
