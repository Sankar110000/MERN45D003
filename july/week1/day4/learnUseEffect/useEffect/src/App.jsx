import './App.css'
import { useEffect, useState } from 'react'
import Home from './components/Home'

function App() {

  const [count, setCount] = useState(0)

  // useEffect(() => {
  //   alert("refrshed")
  // }, [count])

  // return statement

  // useEffect(() => {
  //   return () => {

  //   }
  // })
  

  return (
    <>
    <Home/>
    </>
  )
}

export default App
