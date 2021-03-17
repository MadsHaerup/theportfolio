import * as React from "react";
import tilt from "../images/footer/tilt.svg";
import waves from "../images/footer/wavesOpacity.svg";
import figure from "../images/footer/footer-figure.svg";
import "./Footer.scss";
import { FaDev, FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
	return (
		<footer className="footer">
			<div className="footer__soMe">
				<a
					aria-label="link to dev"
					target="_blank"
					rel="noreferrer"
					className="footer__soMe__link"
					href="https://dev.to/madshaerup">
					<FaLinkedinIn />
				</a>
				<a
					aria-label="link to github"
					target="_blank"
					rel="noreferrer"
					className="footer__soMe__link"
					href="https://github.com/MadsHaerup">
					<FaGithub />
				</a>
				<a
					aria-label="link to linkedin"
					target="_blank"
					rel="noreferrer"
					className="footer__soMe__link"
					href="https://linkedin.com">
					<FaDev />
				</a>
			</div>
			<img className="footer__tilt" style={{ transform: "rotate(180deg)" }} src={tilt} alt="tilt" />
			<img className="footer__waves" style={{ transform: "rotate(180deg)" }} src={waves} alt="waves" />
			<img className="footer__figure" src={figure} alt="figure" />
		</footer>
	);
}
