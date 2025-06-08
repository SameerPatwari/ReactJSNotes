import React , {useContext} from 'react'
import { DataContext } from '../context/UserContext';
const Header = () => {
    const Age = useContext(DataContext); // useContext is used to access the data from the context object created by createContext, which is created in UserContext.jsx
  return (
    <div>
      <h1>AGE: {Age.age}</h1>
    </div>
  )
}

export default Header
