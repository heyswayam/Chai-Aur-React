import React from "react";
import ReactDOM from "react-dom/client";
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import "./index.css";
import Layout from "./Layout.jsx";
import Home from "./Components/home.jsx";
import Contact from "./Components/contact.jsx";
import About from "./Components/about.jsx";
import User from "./Components/user.jsx";
import Github from "./Components/github.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "",
				element: <Home />,
			},
			{
				path: "about",
				element: <About />,
			},
			{
				path: "contact",
				element: <Contact />,
			},
			{
				path: "user/:userid",
				element: <User />,
			},
			{
				path: "github",
				element: <Github/>
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
