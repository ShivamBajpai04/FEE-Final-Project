import React from "react";
import { Link } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import useAuth from "../hooks/useAuth"; // Import the custom useAuth hook
import { toast } from "react-toastify";
import Logo from "../assets/images/Logo.png";

function Navbar() {
	const { state } = useAuth();
	const { isAuthenticated } = state; // Destructure isAuthenticated from state
	const { logout, isLoading } = useLogout();

	const handleLogout = async () => {
		try {
			logout();
		} catch (error) {
			console.error("Logout error:", error);
			toast.error("An error occurred during logout");
		}
	};

	return (
		<div className="flex justify-between mt-5 px-20">
			<Link to="/">
				<img src={Logo} alt="logo" className="w-12 h-12 mx-5" />
			</Link>
			<div className="flex gap-10 font-alegreya text-2xl items-end">
				<Link to="/" className="text-black no-underline">
					Home
				</Link>
				<a href="#exercises" className="text-black no-underline">
					Exercises
				</a>
				{isAuthenticated ? (
					<button
						onClick={handleLogout}
						className="text-black no-underline cursor-pointer"
						disabled={isLoading}
					>
						{isLoading ? "Logging out..." : "Logout"}
					</button>
				) : (
					<Link to="/login" className="text-black no-underline">
						Login
					</Link>
				)}
			</div>
		</div>
	);
}

export default Navbar;
