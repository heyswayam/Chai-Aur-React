import React from "react";
import Header from "./Components/header";
import Footer from "./Components/footer";
import { Outlet } from "react-router-dom";

function Layout() {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
}

export default Layout;
