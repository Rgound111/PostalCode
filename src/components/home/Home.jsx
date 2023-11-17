import React, { useState } from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const [postalcode , setPostalcode] = useState()
  const navigate = useNavigate();
  const handlechange = (e) => {
    let postalcode = e.target.value
    setPostalcode(postalcode)
  }
  
  const handleSubmit = () => {
    navigate(`/details/${postalcode}`)
    console.log(postalcode)
  }

  return (
    <div className='Home_container'>
      <h3>This components is for Entering the postal code in India (Delhi, Mumbai, Kolkata etc...)</h3>
      <input type="text" placeholder='Enter the postalcode' onChange={handlechange} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Home
