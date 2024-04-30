import React from "react";
// import { randomUUID } from "crypto";
// import { Typography, Box, Stack } from "@mui/material";

function ExerciseVideos({ exerciseVideos, name }) {
	if (!exerciseVideos.length) return "loading...";

	return (
		<div className="mt-5 p-20">
			<h3 className="mb-8 font-bold text-3xl">
				Watch <span className="text-red-500 capitalize">{name} </span> Exercise Videos
			</h3>
			<div className="flex  flex-wrap gap-3">
				{exerciseVideos?.slice(0, 6).map((item) => (
					<div className="p-1">
						<a
							key={crypto.randomUUID()}
							className="exercise-video"
							href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
							target="_blank"
							rel="noreferrer">
							<img
								className="rounded-tl-2xl"
								src={item.video.thumbnails[0].url}
								alt={item.video.title}
							/>
							<h6 className="text-2xl font-semibold">{item.video.title}</h6>
							<h5 className="text-sm text-neutral-500 font-semibold mt-[-8px]">{item.video.channelName}</h5>
						</a>
					</div>
				))}
			</div>
		</div>
	);
}

export default ExerciseVideos;
