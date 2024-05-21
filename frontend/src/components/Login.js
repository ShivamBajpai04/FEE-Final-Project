import React, { useState } from "react";
import useLogin from "../hooks/useLogin";

const Login = () => {
	const { login, isLoading, error } = useLogin();
	const [showPassword, setShowPassword] = useState(false);
	const [formError, setFormError] = useState("");

	const handleLogin = async (e) => {
		e.preventDefault();
		const username = e.target.elements.username.value;
		const password = e.target.elements.password.value;

		if (!username || !password) {
			setFormError("Both fields are required");
			return;
		}

		setFormError("");
		login({ username, password });
	};

	return (
		<div className="max-w-md mx-auto p-4 text-center border rounded bg-gray-100">
			<h2 className="text-2xl font-bold mb-4">Login</h2>
			{error && <p className="text-red-500 mb-4">{error}</p>}
			{formError && <p className="text-red-500 mb-4">{formError}</p>}
			<form
				onSubmit={handleLogin}
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
				<button
					type="submit"
					disabled={isLoading}
					className="bg-blue-500 text-white py-2 px-4 rounded disabled:bg-gray-400 disabled:cursor-not-allowed">
					{isLoading ? "Logging in..." : "Log in"}
				</button>
			</form>
			<p className="mt-4">
				Don't have an account?{" "}
				<a
					href="/register"
					className="text-blue-500">
					Register
				</a>
			</p>
		</div>
	);
};

export default Login;
