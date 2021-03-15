import "./Navbar.scss";
import React from "react";
import {Link} from "gatsby";

export default function Navbar() {
	return (
    <>
    <div className="line"></div>
    <nav className="navbar">
      <div className="navbar__profileImg">
        <img className="profileImg" src="https://picsum.photos/id/237/100/100" alt="a picture of me"/>
      </div>
      <ul className="navbar__ul">
        <li className="navbar__ul__listItem">
          <Link to="#" className="link">home</Link>
        </li>
        <li className="navbar__ul__listItem">
        <Link to="#" className="link">projects</Link>
        </li>
        <li className="navbar__ul__listItem">
        <Link to="#" className="link">about me</Link>
        </li>
        <li className="navbar__ul__listItem">
        <Link to="#" className="link">blog</Link>
        </li>
        <li className="navbar__ul__listItem">
        <Link to="#" className="link">contact</Link>
        </li>
      </ul>
    </nav>
    </>
  );
}
