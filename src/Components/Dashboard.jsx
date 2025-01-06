import React from "react";
import { Link, Routes,Route, useLocation, BrowserRouter, Outlet } from "react-router-dom";
import Menu from "./Menu";
import TopBar from "./TopBar";
import Cards from "./Cards";
import Settings from "./Settings";

const Dashboard = () => {
  return (
    <div className="flex">
    <Menu/>
    <Outlet/>
    </div>
    
    
      
  );
};

export default Dashboard;
