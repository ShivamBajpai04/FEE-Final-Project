import React from "react";
import Loader from "./Loader";
// import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";

function BodyPart({ item, setBodyPart, bodyPart }) {
	return (
		<div
			className={`bodyPart-card ${bodyPart === item ? "p-5 border-t-4 w-35 h-35 border-red-600 bg-white rounded-bl-2xlcursor-pointer gap-47" : "bg-white rounded-bl-2xl w-35 h-35 cursor-pointer gap-47"}`}
			onClick={() => {
				if (!item) {
					<Loader />;
				} else {
					setBodyPart(item);
				}
				window.scrollTo({ top: 1600, left: 100, behavior: "smooth" });
			}}>
			<img
				src={Icon}
				alt="dumbbell"
				className="w-30 h-30"
			/>
			<p
				style={{ fontSize: "1.5rem" }}
				alt="dumbbell"
				className="w-40 font-bold text-black capitalize">
				{item}
			</p>
		</div>
	);
}

export default BodyPart;
