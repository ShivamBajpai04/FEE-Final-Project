
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
// import {Box} from '@mui/material'
import {exerciseOptions, youTubeOptions, fetchData} from '../utils/fetchData'
import { Detail,ExerciseVideos, SimilarExercises } from '../components'
import Loader from '../components/Loader'


function ExerciseDetail() {

  const [exerciseDetail, setExercisesDetail] = useState({})
  const [exerciseVideos, setExercisesVideos] = useState([])
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();

  useEffect(()=>{

    const fetchExercisesData = async() => {
      const exerciseUrl = 'https://exercisedb.p.rapidapi.com'

      const youtubeUrl = 'https://youtube-search-and-download.p.rapidapi.com'

      const exerciseDetailData = await fetchData(`${exerciseUrl}/exercises/exercise/${id}`,exerciseOptions )

      setExercisesDetail(exerciseDetailData)

      const exerciseVideosData = await fetchData(`${youtubeUrl}/search?query=${exerciseDetailData.name}`, youTubeOptions)

      setExercisesVideos(exerciseVideosData.contents)

      const targetMuscleExercisesData = await fetchData(`${exerciseUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);

      setTargetMuscleExercises(targetMuscleExercisesData);

      const equimentExercisesData = await fetchData(`${exerciseUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);

      setEquipmentExercises(equimentExercisesData);
    };
      
    fetchExercisesData()
  },[id])

    if (!exerciseDetail) return <Loader />;
  return (
    <div>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercises  targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
    </div>
  )
}

export default ExerciseDetail