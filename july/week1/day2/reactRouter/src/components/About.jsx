import React from 'react'
import { useNavigate } from 'react-router-dom'

function About() {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/services')
    }
  return (
    <div>
        <div>About</div>
    <button onClick={handleClick}>go to service page</button>
    </div>
  )
}

export default About