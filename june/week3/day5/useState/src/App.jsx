import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./App.css"

function App() {
  const [theme, setTheme] = useState("light")
  const [isDark, setIsDark] = useState(false)


  function handleClick(){
    if(theme == "light"){
      setTheme("dark")
      setIsDark(!isDark)
      document.body.style.backgroundColor = "black"
      document.body.style.color = "white"
    }else{
      setTheme("light")
      setIsDark(!isDark)  
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
    }
  }

  return (
    <>
    <h1>Hello</h1>
    <button onClick={handleClick}>{isDark ? "light" : "dark"}</button>
    </>
  )
}

export default App
