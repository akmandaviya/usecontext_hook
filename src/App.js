import React, { createContext } from 'react'
import ChildA from './ChildA'


const Name = createContext()
const Place = createContext()
const Age = createContext()
const favFood = createContext() 

const App = () => {
  return (
    <div>
        <Name.Provider value={"AbdulKairm Mandaviya"}>
            <Place.Provider value={"Gujart"}>
                <Age.Provider value={29}>
                    <favFood.Provider value={"Pizza"}>
           <ChildA/>
           </favFood.Provider> 
           </Age.Provider>
           </Place.Provider>
        </Name.Provider>
     
    </div>
  )
}

export default App
export {Name, Place, Age, favFood}
