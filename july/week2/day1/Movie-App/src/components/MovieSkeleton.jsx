import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function MovieSkeleton() {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className='flex w-[500px] justify-center gap-3'>
        <div>
          <Skeleton variant="rectangular" height={300} width={200}/>
        </div>
        <div>
          <Skeleton variant="text" width={350} height={30}/>
          <Skeleton variant="text" width={350} height={30}/>
          <Skeleton variant="text" width={350} height={30}/>
          <Skeleton variant="text" width={350} height={30}/>
          <Skeleton variant="text" width={350} height={30}/>
          <Skeleton variant="text" width={350} height={30}/>
        </div>
      </div>
    </div>
  );
}
