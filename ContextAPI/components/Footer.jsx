import React, { useContext } from 'react'
import { DataContext } from '../context/UserContext';

const Footer = () => {
    const City = useContext(DataContext);
  return (
    <div>
      <h1>CITY: {City.city}</h1>
    </div>
  )
}

export default Footer
