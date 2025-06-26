import React, { useContext } from 'react'
import Child3 from './Child3'
import { useName } from '../providers/NameProvider'

function Child2() {
    const name = useName()
    console.log(name);
    
  return (
    <>
    <div>Child2</div>
    <Child3/>
    </>
  )
}

export default Child2