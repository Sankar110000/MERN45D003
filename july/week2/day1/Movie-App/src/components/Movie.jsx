import React, { useEffect, useState } from 'react'
import {useParams} from "react-router"
import axios from "axios"
import Loading from './Loading'
import Skeleton from "./MovieSkeleton"

function Movie() {

  const [movieData, setMovieData] = useState()
  const [isLoading, setIsLoading] = useState(false)

  const {id} = useParams()
  const api = import.meta.env.VITE_URL
  const url = api+'&i='+id

  useEffect(() => {
    setIsLoading(true)
    async function getData() {
      const res = await axios.get(url)
      setIsLoading(false)
      setMovieData(res.data)
    }
    getData()
  }, [])

  return (
    isLoading ? <Skeleton qty={11}/> :
    <div className='flex w-screen h-screen justify-center items-center'>
      <div className=' w-[600px] flex p-4 border-2 border-gray-500 rounded'>
          <img src={movieData?.Poster} alt={movieData?.Title} className='rounded me-4 h-[300px]'/>
          <div className='text-sm'>
            <p><span className='text-red-600 font-bold'>Title:</span> {movieData?.Title}</p>
            <p><span className='text-red-600 font-bold'>Description:</span> {movieData?.Plot}</p>
            <p><span className='text-red-600 font-bold'>Director:</span> {movieData?.Director}</p>
            <p><span className='text-red-600 font-bold'>Title:</span>{movieData?.Genre}</p>
            <p><span className='text-red-600 font-bold'>Actors:</span>{movieData?.Actors}</p>
          </div>
      </div>
    </div>
  )
}

export default Movie