import { useEffect } from 'react'
import Home from './components/Home'
import { useState } from 'react'

function App() {

  const [theme, setTheme] = useState('light')

  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark')
    document.querySelector('html').classList.add(theme)
  }, [theme])

  return (
    <div>
      <Home theme={theme} setTheme={setTheme}/>
    </div>
  )
}

export default App
