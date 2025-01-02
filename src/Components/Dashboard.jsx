import React from 'react'
import { useLocation } from 'react-router-dom';

const Dashboard = () => {
    const location = useLocation();
    const { name, gender } = location.state || { name: "Guest", gender: "not specified" };

    // Get the current date
  const currentDate = new Date();

  // Get the day name (e.g., "Thursday")
  const dayName = currentDate.toLocaleString('en-US', { weekday: 'long' });

  // Get the full date (e.g., "Thursday, 2 January 2025")
  const formattedDate = currentDate.toLocaleDateString('en-GB', { 
    day: 'numeric', 
    month: 'long', 
    year: 'numeric' 
  });

  // Define image sources based on gender
  const imgSrc = gender === "male"
  ? "https://cdn-icons-png.flaticon.com/512/4140/4140039.png" //Male Avatar
  : gender === "female"
  ? "https://cdn-icons-png.flaticon.com/512/4140/4140047.png" //Female Avatar
  : "https://cdn-icons-png.flaticon.com/512/2111/2111425.png"; //Github icon
  
  return (
    <>
        <div className="justify-center text-center">
            <h1>{name}</h1>
            <img src={imgSrc}/>
            <p>{dayName}, {formattedDate}</p>
        </div>
    </>
  )
}

export default Dashboard