import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import { ThemeProvider } from './providers/ThemeProvider'


function App() {
  return (
    <>
    <ThemeProvider>
      <Card/>
    </ThemeProvider>
    </>
  )
}

export default App
