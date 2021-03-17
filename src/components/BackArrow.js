import * as React from "react";
import { IoIosArrowBack } from "react-icons/io";
import "./BackArrow.scss";

export default function BackArrow() {
	return (
		<button className="backArrow" onClick={() => window.history.back()}>
			<IoIosArrowBack className="backArrow__icon" />
			<p className="backArrow__text">go back</p>
		</button>
	);
}
