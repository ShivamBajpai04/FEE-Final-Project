
import React from 'react'
import { Link } from 'react-router-dom'
// import { Button, Stack, Typography } from '@mui/material';



function ExerciseCard({exercise}) {
  return (
    <Link className='exercise-card' to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <div className="flex">

        <button
        className="ml-5 p-1 text-white bg-red-500 text-sm rounded-full capitalize"
        >
          {exercise.bodyPart}
        </button>

        <button
        className="ml-5 p-1 text-white bg-yellow-500 text-sm rounded-full capitalize"
        >
          {exercise.target}
        </button>
      </div>

      <h2
      className="ml-5 text-black font-bold text-lg lg:text-2xl xs:text-xl mt-3 pb-2 capitalize"
      >
        {exercise.name}
      </h2>
    </Link>
  )
}

export default ExerciseCard