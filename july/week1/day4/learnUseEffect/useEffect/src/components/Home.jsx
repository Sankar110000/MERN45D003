import React, { useEffect, useState } from 'react'

function Home() {
    const [data, setData] = useState()
    useEffect(() => {
        const fetchData = async() => {
            const res = await(await fetch("https://jsonplaceholder.typicode.com/todos")).json()
            setData(res)
        }
        fetchData()
    }, [])

  return (
    <>
        <div>Home</div>
    <ul className='flex flex-wrap justify-center gap-2'>
        {data && data.map((ele, idx) => {
        return (
            <li key={idx} className='w-[200px] h-[200px] bg-gray-500 text-center text-white p-4 rounded-lg'>{ele.title}</li>
        )
    })}
    </ul>
    </>
  )
}

export default Home