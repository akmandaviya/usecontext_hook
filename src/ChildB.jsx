import React, { useContext } from 'react'
import { Age, favFood } from './App';
import ChildC from './ChildC'

const ChildB = () => {

const age = useContext(Age);
const food = useContext(favFood)

  return (
    <div>
        <ChildC/>
        <h1>My age is {age}, my fav food is {food}</h1>
      
    </div> 
  )
}

export default ChildB
