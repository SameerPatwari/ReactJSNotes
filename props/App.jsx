import React from 'react'
import Card from './components/Card.jsx'
const App = () => {
  const users = [
  {
    name: "Aarav Mehta",
    city: "Bangalore",
    age: 28,
    profession: "Frontend Developer",
    profilePhoto: "https://randomuser.me/api/portraits/men/75.jpg"
  },
  {
    name: "Sneha Rao",
    city: "Mumbai",
    age: 25,
    profession: "Data Analyst",
    profilePhoto: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    name: "Rohit Sharma",
    city: "Delhi",
    age: 30,
    profession: "Product Manager",
    profilePhoto: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    name: "Meera Iyer",
    city: "Chennai",
    age: 26,
    profession: "UI/UX Designer",
    profilePhoto: "https://randomuser.me/api/portraits/women/22.jpg"
  },
  {
    name: "Karan Patel",
    city: "Ahmedabad",
    age: 29,
    profession: "Backend Engineer",
    profilePhoto: "https://randomuser.me/api/portraits/men/12.jpg"
  }
];
  return (
    <>
      {users.map(function (elem,idx){
        return <Card key={idx} name={elem.name} city={elem.city} age={elem.age} profession={elem.profession} profilePhoto={elem.profilePhoto} />;
      })}
    </>
  )
}

export default App
