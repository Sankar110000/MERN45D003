import React, { useContext } from 'react'
import { Context } from '../App'

function Child3() {
    const name = useContext(Context);
  return (
    <div>{name}</div>
  )
}

export default Child3