import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { exerciseOptions, fetchData } from "../utilis/fetchData";
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";

function ExerciseDetail() {
  const [exerciseDetail, setExerciseDetail] = useState({})
  const {id} = useParams()
  useEffect(()=>{
const fetchExercisesData = async ()=>{
  const exerciseDbUrl = "exercisedb.p.rapidapi.com"
  const youtubeSearchUrl = "https://youtube-search-and-download.p.rapidapi.com"

  const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/${id}`, exerciseOptions)
  setExerciseDetail(exerciseDetailData)
}

  }, [id])
  return (
    <Box>
      <Detail exerciseDetail={}/>
      <ExerciseVideos />
      <SimilarExercises />
    </Box>
  );
}

export default ExerciseDetail;
