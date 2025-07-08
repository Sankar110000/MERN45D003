import React from 'react'
import Skeleton from "./MovieSkeleton"

function Loading({length}) {
  console.log(length)
  return (
    <div className='h-screen flex justify-center items-center'>

      <h1>Loading ..</h1>
    </div>
  )
}

export default Loading