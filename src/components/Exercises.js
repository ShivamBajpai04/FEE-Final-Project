
import React,{ useEffect, useState} from 'react'
import Pagination from '@mui/material/Pagination'
// import {Box, Stack, Typography} from '@mui/material'
import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';
import Loader from './Loader';



const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'  // for smooth scroll
    });
  };
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 6;

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [setExercises,bodyPart]);

  // Pagination
  // console.log('pumpit ',exercises)
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (event, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1600, behavior: 'smooth' });
  };

  if (!currentExercises.length) return <Loader />;

  return (
    <div id="exercises" className="flex flex-col gap-5 mt-50 px-20">
      <h4 className="font-bold text-4xl lg:text-7xl mb-10">GAINS</h4>
      <div className="flex flex-wrap justify-center gap-10">
        {currentExercises.map((exercise, idx) => (
          <div onClick={scrollToTop}>
            <ExerciseCard key={crypto.randomUUID()} exercise={exercise} />
          </div>
        ))}
      </div>
      <div className="mx-auto">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </div>
    </div>
  );
};

export default Exercises;