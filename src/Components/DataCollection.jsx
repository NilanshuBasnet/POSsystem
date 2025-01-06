import React,{useState, useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import logo from '../assets/login.png'
import { UserContext } from '../context/UserContext'

const DataCollection = () => {

    const { setUserData } = useContext(UserContext);// Access context function

    const [maxLengthReached, setMaxLengthReached] = useState(false);
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [loggedStatus, setLoggedStatus] =useState(false)
    const navigate = useNavigate();

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };

    const handleMaxLength = (event) => {
        const value = event.target.value;
        setMaxLengthReached(value.length === 20);
    };

    const handleContinue = () => {
        const finalName = name.trim() ? name : 'Guest';
        const finalGender = gender || 'Not specified';
        // Update the context with the user's data
        setUserData({ name: finalName, gender: finalGender });

        // Navigate to the dashboard
        navigate('/dashboard');
        };
    

  return (
    <div className="flex items-center justify-center h-screen bg-[#F5F5FD]">
    <div className="bg-white rounded-[10px] text-center w-auto p-8 border-2 border-slate-100 ">
        {/* //Logo */}
        <div className="flex justify-center items-center h-20 mb-5">
            <img className="h-full" src ={logo}/>
        </div>
        
        <h1 className="text-3xl font-bold mt-2 mb-1" >Welcome Back</h1>
        <p className="text-gray-400">Welcome Back, Please enter your details</p>

        <input 
        id="userName" 
        className="border border-gray-300 rounded-lg p-2 mb-1 mt-5 w-full" 
        type="text" 
        placeholder="Enter your Name" 
        maxLength="20" 
        onChange={(event) => {
            handleNameChange(event);
            handleMaxLength(event);}} /><br/>
        {maxLengthReached ? 
            (<p className="text-[#FF5733] text-sm text-left ml-2">Maximum length reached !</p>) : null
        }

        <div className="mb-4 mt-3 text-left">
            <input type="radio" id="male" name="gender" value="male" className="mr-2" onChange={handleGenderChange}/>
            <label htmlFor="male">Male</label>
            <input type="radio" id="female" name="gender" value="female" className="ml-4 mr-2" onChange={handleGenderChange}/>
            <label htmlFor="female">Female</label>
        </div>

        <button className="text-white bg-[#01B763] hover:bg-[#02D77C] px-4 py-2 rounded-lg w-full mt-4 mb-4" onClick={handleContinue}>Continue</button>
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