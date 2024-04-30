import React from "react";
import { Link } from "react-router-dom";
// import {Stack} from '@mui/material'
import Logo from "../assets/images/Logo.png";

function Navbar() {
	return (
		<div className="flex justify-between mt-5 px-20">
			<Link to="/">
				<img
					src={Logo}
					alt="logo"
					className="w-12 h-12 mx-5"
				/>
			</Link>
			<div className="flex gap-10 font-alegreya text-2xl items-end">
				<Link
					to="/"
					className="text-black no-underline">
					Home
				</Link>
				<a
					href="#exercises"
					className="text-black no-underline">
					Exercises
				</a>
			</div>
		</div>
	);
}

export default Navbar;
