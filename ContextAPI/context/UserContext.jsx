import React, { createContext } from 'react'

export const DataContext = createContext(); // createContext is used to create a context object, which can be used to share data across components without prop drilling
const UserContext = (props) => {
    const username = "Sameer03"; // send this data to all the components across the application, this is done to centralize the data and avoid prop drilling
    const userData = {
        name: "Sam",
        age:21,
        occupation: "Software Engineer",
        city: "Hyderabad" 
    }
    console.log(props.children); // this will give us the App component, which is the child of UserContext
  return (
    <div>
        <DataContext.Provider value={userData}>
          {props.children}
        </DataContext.Provider>
    </div>
  )
}

export default UserContext
