import React, { useContext } from 'react'
import Header from './components/Header'
import Section from './components/Section'
import Footer from './components/Footer'
import { DataContext } from './context/UserContext'

const App = () => {

  const Name = useContext(DataContext); // useContext is used to access the data from the context object created by createContext, which is created in UserContext.jsx
  return (
    <div>
      <h1>NAME: {Name.name}</h1>
      <Header />
      <Section />
      <Footer />
    </div>
  )
}

export default App

