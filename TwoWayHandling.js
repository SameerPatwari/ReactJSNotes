// Form handling and 2 way binding in react
import React, { useState } from 'react'
const App = () => {
        const [username, setUsername] = useState('');
        function submitHandler(e){
          e.preventDefault();
          console.log(username);
          setUsername('');
        }
        return (
          <div>
            <form onSubmit={(e)=> submitHandler(e)}>
              <input value={username} onChange={(e)=> setUsername(e.target.value)} className='px-4 py-3 rounded m-5' type="text" placeholder='Enter your name' />
              <button className='px-4 text-white py-3 m-5 text-xl font-semibold bg-emerald-600 rounded'>Submit</button>
            </form>
          </div>
        );
    }

export default App

/* this is called 2 way handling because we are not making any chages directly to the iput field instead 
we are using the state to manage the value of the input field and then we are updating the state when the input 
field changes and then we are using that state to set the value of the input field. This is called 2 way binding in react. 
This is a simple form handling example in React where we are using useState hook to manage the state of the input field and 
then we are using that state to set the value of the input field. We are also using the onChange event to update the state 
when the input field changes. When the form is submitted, we are preventing the default behavior of the form and then logging 
the value of the input field to the console and resetting the input field to an empty string. */
