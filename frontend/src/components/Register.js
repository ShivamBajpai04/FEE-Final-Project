import React, { useState } from "react";
import useRegister from "../hooks/useRegister";

const Register = () => {
	const { register, isLoading, error } = useRegister();
	const [showPassword, setShowPassword] = useState(false);
	const [formError, setFormError] = useState("");

	const handleRegister = async (e) => {
		e.preventDefault();
		const username = e.target.elements.username.value;
		const password = e.target.elements.password.value;
		const confirmPassword = e.target.elements.confirmPassword.value;

		if (!username || !password || !confirmPassword) {
			setFormError("All fields are required");
			return;
		}

		if (password !== confirmPassword) {
			setFormError("Passwords do not match");
			return;
		}

		setFormError("");
		register({ username, password });
	};

	return (
		<div className="max-w-md mx-auto p-4 text-center border rounded bg-gray-100">
			<h2 className="text-2xl font-bold mb-4">Register</h2>
			{error && <p className="text-red-500 mb-4">{error}</p>}
			{formError && <p className="text-red-500 mb-4">{formError}</p>}
			<form
				onSubmit={handleRegister}
				className="flex flex-col items-center">
				<label className="mb-4 w-full">
					Username:
					<input
						type="text"
						name="username"
						className="block w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
					/>
				</label>
				<label className="mb-4 w-full">
					Password:
					<div className="relative">
						<input
							type={showPassword ? "text" : "password"}
							name="password"
							className="block w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
						/>
						<span
							onClick={() => setShowPassword(!showPassword)}
							className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer">
							{showPassword ? "🙈" : "👁️"}
						</span>
					</div>
				</label>
				<label className="mb-4 w-full">
					Confirm Password:
					<input
						type={showPassword ? "text" : "password"}
						name="confirmPassword"
						className="block w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
					/>
				</label>
				<button
					type="submit"
					disabled={isLoading}
					className="bg-blue-500 text-white py-2 px-4 rounded disabled:bg-gray-400 disabled:cursor-not-allowed">
					{isLoading ? "Registering..." : "Register"}
				</button>
			</form>
			<p className="mt-4">
				Already have an account?{" "}
				<a
					href="/login"
					className="text-blue-500">
					Log in
				</a>
			</p>
		</div>
	);
};

export default Register;
