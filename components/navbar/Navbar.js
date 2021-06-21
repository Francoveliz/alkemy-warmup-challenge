import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
	const [navOpen, setNavOpen] = useState(false);

	return (
		<nav className="navbar navbar-expand-sm navbar-light bg-light">
			<div className="container d-flex flex-column align-items-end">
				<button
					onClick={() => setNavOpen(!navOpen)}
					className="navbar-toggler"
					type="button">
					<span className="navbar-toggler-icon" />
				</button>
				<div
					className={` ${
						navOpen ? "d-block" : "d-none"
					} d-sm-block align-self-center align-self-sm-end`}>
					<ul className="navbar-nav ms-0 me-auto">
						<li className="nav-item ms-3 pb-3 pb-sm-0">
							<Link className="nav-link " href="/">
								Home
							</Link>
						</li>
						<li className="nav-item ms-3 pb-3 pb-sm-0">
							<Link className="nav-link" href="/post/new">
								New Post
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
