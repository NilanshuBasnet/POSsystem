import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

const DataCollection = () => {

    const navigate = useNavigate();

    const handleContinue = ()=>{
        let name = document.getElementById("userName").value.trim();
        // Get the selected gender
        const genderInput = document.querySelector('input[name="gender"]:checked');
        let gender = genderInput ? genderInput.value : "not specified";

        if(!name){
            name="Guest"
        }
        
       // Navigate to dashboard with state
       navigate('/dashboard', { state: { name, gender } });
        
    }
    

  return (
    <div className="flex items-center justify-center h-screen bg-[#FBFBFB] m-5">
    <div className="bg-white rounded-[10px] text-center w-auto p-8 border-2 border-slate-100 ">
        <h1 className="text-3xl font-bold mt-2 mb-1" >Welcome Back</h1>
        <p className="text-gray-400">Welcome Back, Please enter your details</p>

        <input id="userName" className="border border-gray-300 rounded-lg p-2 mb-4 mt-5 w-full" type="text" placeholder="Enter your First Name" maxLength="15" /><br/>

        <div className="mb-4 text-left">
            <input type="radio" id="male" name="gender" value="male" className="mr-2"/>
            <label htmlFor="male">Male</label>
            <input type="radio" id="female" name="gender" value="female" className="ml-4 mr-2"/>
            <label htmlFor="female">Female</label>
        </div>

        <button className="text-white bg-[#01B763] hover:bg-[#00d16f] px-4 py-2 rounded-lg w-full mt-4 mb-4" onClick={handleContinue}>Continue</button>
        <div className="flex h-[30px] justify-center">
            <a href='https://github.com/NilanshuBasnet'>
                <img className="h-full mr-7 cursor-pointer" src="https://raw.githubusercontent.com/dheereshagrwal/colored-icons/3d00a2dfc012a7ad429beeac8edb3dc1d9079437/public/logos/github/github.svg" alt="GitHub"/>
            </a>
            <a href='https://www.linkedin.com/in/nilanshubasnet'>
                <img className="h-full cursor-pointer" src="https://raw.githubusercontent.com/dheereshagrwal/colored-icons/3d00a2dfc012a7ad429beeac8edb3dc1d9079437/public/logos/linkedin/linkedin.svg" alt="LinkedIn"/>
            </a>
           
            

        </div>
    </div>
    </div>

    
  

  )
}

export default DataCollection