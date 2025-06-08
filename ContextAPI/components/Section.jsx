import React, { useContext } from 'react'
import { DataContext } from '../context/UserContext';

const Section = () => {
    const Occupation = useContext(DataContext);
  return (
    <div>
      <h1>OCCUPATION: {Occupation.occupation}</h1>
    </div>
  )
}

export default Section
