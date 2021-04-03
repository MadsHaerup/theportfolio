import * as React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PopOut from "../components/PopOut";

export default function index() {
	return (
		<>
			<Navbar />
				<h1>Welcome to my portfolio</h1>
			<PopOut/>
			<Footer />
		</>
	);
}
