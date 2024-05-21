// import { Typography, Box, Stack } from '@mui/material';
import React from "react";
import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";

function SimilarExercises({ targetMuscleExercises, equipmentExercises }) {
	return (
		<div className="mt-10">
			<h3 className="text-4xl font-bold ml-5 mt-3 mb-8">
				Similar <span className="text-red-500 capitalize">Target Muscle</span> exercises
			</h3>
			<div
				className="px-2 relative">
				{targetMuscleExercises.length !== 0 ? <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader />}
			</div>

			<h3 className="text-4xl font-bold ml-5 mt-10 mb-8">
				Similar <span className="text-red-500 capitalize">Equipment</span> exercises
			</h3>
			<div
				className="px-2 relative">
				{equipmentExercises.length !== 0 ? <HorizontalScrollbar data={equipmentExercises} /> : <Loader />}
			</div>
		</div>
	);
}

export default SimilarExercises;
