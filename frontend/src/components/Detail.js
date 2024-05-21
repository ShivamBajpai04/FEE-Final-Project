import React from "react";
// import { Typography, Stack, Button } from '@mui/material';
import Loader from "./Loader";
import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";

function Detail({ exerciseDetail }) {
	const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

	const extraDetails = [
		{
			icon: BodyPartImage,
			name: bodyPart,
		},
		{
			icon: TargetImage,
			name: target,
		},
		{
			icon: EquipmentImage,
			name: equipment,
		},
	];
	if (!gifUrl) return <Loader />;
	return (
		<div className="flex flex-col lg:flex-row gap-5 pt-10 items-center justify-center">
			<img
				src={gifUrl}
				alt={name}
				loading="lazy"
				className="detail-image"
			/>
			<div className="flex flex-col gap-35">
				<h3 className="text-3xl">{name}</h3>
				<h5 className="text-xl">
					Get Pumped by doing {name} in prefect form. This movement will training your {target} getting into a state jacked or shred if you focus on high rep low rest
				</h5>
				<div>
					<div className="m-5 flex justify-between align-center lg:flex-col gap-5">
						{extraDetails.map((item, index) => (
							<div
								key={index}
								className="flex gap-5 items-center">
								<button
									className="bg-FFF2DB rounded-full w-100 h-100">
									<img
										src={item.icon}
										alt="icon"
										style={{ width: "50px", height: " 50px" }}
									/>
								</button>
								<h6 className="capitalize">{item.name}</h6>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Detail;
