import React, { useEffect, useState } from "react";
// import { Box, Button, Stack, TextField, Typography } from "@mui/material";
// import { SearchOffSharp } from "@mui/icons-material";
// import { exerciseOptions, fetchData } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";
import axios from "axios";

function SearchExercises({ setExercises, bodyPart, setBodyPart }) {
	const [search, setSearch] = useState("");
	const [bodyParts, setBodyParts] = useState([]);

	useEffect(() => {
		const fetchExercisesData = async () => {
			const bodyPartsData = await axios.get("https://exercisedb.p.rapidapi.com/exercises/bodyPartList", {
				headers: {
					"X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
					"X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
				},
			});
      // console.log(bodyPartsData.data);
			// exerciseOptions
			setBodyParts(["all", ...bodyPartsData.data]);
		};
		fetchExercisesData();
	}, []);

	const handleSearch = async () => {
		if (search) {
			const exercisesData = await axios.get("https://exercisedb.p.rapidapi.com/exercises", {
				headers: {
					"X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
					"X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
				},
			});

			const searchedExercises = exercisesData.data.filter((el) => el.name.toLowerCase().includes(search) || el.target.toLowerCase().includes(search) || el.equipment.toLowerCase().includes(search) || el.bodyPart.toLowerCase().includes(search));
			setSearch("");
			setExercises(searchedExercises);
		}
	};
	// url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
	return (
		<div className="flex flex-col items-center mt-37 justify-center p-20">
			<h1 className="font-bold text-4xl lg:text-6xl xs:text-3xl mb-10 text-center">
				Best Pump Workout <br />
				Feel The Pump
			</h1>
			<div className="flex gap-5 items-center relative mb-20">
				<input
					className="h-16 px-6 font-bold rounded-full w-96 xs:w-72 bg-white"
					value={search}
					onChange={(e) => setSearch(e.target.value.toLowerCase())}
					placeholder="Search Gains"
					type="text"
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							handleSearch();
							e.preventDefault(); // To prevent form submission
						}
					}}
				/>
				<button
					className="search-btn rounded-full bg-red-600 text-white text-lg w-32 h-14"
					onClick={handleSearch}>
					Search
				</button>
			</div>
			<div className="relative w-full p-4">
				<HorizontalScrollbar
					data={bodyParts}
					bodyParts
					setBodyPart={setBodyPart}
					bodyPart={bodyPart}
				/>
			</div>
		</div>
	);
}

export default SearchExercises;
