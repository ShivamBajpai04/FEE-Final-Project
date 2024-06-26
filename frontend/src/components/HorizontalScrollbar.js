import React, { useContext } from "react";
// import { Box, Typography } from '@mui/material'
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import BodyPart from "./BodyPart";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";
import ExerciseCard from "./ExerciseCard";

const LeftArrow = () => {
	const { scrollPrev } = useContext(VisibilityContext);

	return (
		<i
			onClick={() => scrollPrev()}
			className="right-arrow">
			<img
				src={LeftArrowIcon}
				alt="right-arrow"
			/>
		</i>
	);
};

const RightArrow = () => {
	const { scrollNext } = useContext(VisibilityContext);

	return (
		<i
			onClick={() => scrollNext()}
			className="left-arrow">
			<img
				src={RightArrowIcon}
				alt="right-arrow"
			/>
		</i>
	);
};

function HorizontalScrollbar({ data, bodyParts, setBodyPart, bodyPart }) {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth", // for smooth scroll
		});
	};
	return (
		<div className="p-5">
			<ScrollMenu
				LeftArrow={LeftArrow}
				RightArrow={RightArrow}>
				{data.map((item) => (
					<div
						onClick={scrollToTop}
						key={item.id || item}
						itemID={item.id || item}
						title={item.id || item}
						className="m-2">
						{bodyParts ? (
							<BodyPart
								item={item}
								setBodyPart={setBodyPart}
								bodyPart={bodyPart}
							/>
						) : (
							<ExerciseCard exercise={item} />
						)}
					</div>
				))}
			</ScrollMenu>
		</div>
	);
}

export default HorizontalScrollbar;
