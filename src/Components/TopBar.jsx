import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { UserContext } from '../context/UserContext'

const TopBar = () => {
  const { userData } = useContext(UserContext); // Access the context
  const { name, gender } = userData;

  // Get the current date
  const currentDate = new Date();

  // Get the day name (e.g., "Thursday")
  const dayName = currentDate.toLocaleString("en-US", { weekday: "long" });

  // Get the full date (e.g., "Thursday, 2 January 2025")
  const formattedDate = currentDate.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  // Define image sources based on gender
  const imgSrc =
    gender === "male"
      ? "https://cdn-icons-png.flaticon.com/512/4140/4140039.png" //Male Avatar
      : gender === "female"
      ? "https://cdn-icons-png.flaticon.com/512/4140/4140047.png" //Female Avatar
      : "https://cdn-icons-png.flaticon.com/512/2111/2111425.png"; //Github icon

  return (
    <div className="flex justify-end text-right items-center bg-white h-[15vh] w-full p-3 pr-7 shadow-[0px_4px_8px_rgba(0,0,0,0.3)]">
      <div className="mr-3">
        <h1 className="text-lg">
          <b>{name}</b>
        </h1>
        <p className="text-sm text-gray-500">
          {dayName}, {formattedDate}
        </p>
      </div>
      <img className="h-[80%] object-contain" src={imgSrc} />
    </div>
  );
};

export default TopBar;
