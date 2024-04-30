
import React, {useState} from 'react'
// import {Box} from '@mui/material'
import { Exercises, HeroBanner, SearchExercises } from '../components'


function Home() {

  const [exercises, setExercises] = useState([])
  const [bodyPart, setBodyPart] = useState('all')
  
  return (
    <div>
      <HeroBanner/>
      <SearchExercises 
      setExercises={setExercises} 
      bodyPart={bodyPart} 
      setBodyPart={setBodyPart}/>
      <Exercises
      setExercises={setExercises} 
      exercises={exercises}
      bodyPart={bodyPart}
      />
    </div>
  )
}

export default Home