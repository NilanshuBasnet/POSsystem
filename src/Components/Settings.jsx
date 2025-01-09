import React,{useState} from 'react'
import TopBar from './TopBar'

const Settings = () => {

  // State to track connection status
  const [isConnected, setIsConnected] = useState(false);

  const handleScan = () => {
    setIsConnected(!isConnected);
  }

  return (
    <div className="h-screen p-7 bg-[#F9FAFC]">
        <h1 className="text-3xl"><b>Settings</b></h1>
        <p className="text-sm text-gray-500 mb-3">Manage your account settings and preferences</p><hr/>
        <div className="mt-10">
          <h2 className="text-lg"><b>Printer Selection</b></h2>
          <select name="printers" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-auto p-2.5 ">
            <option value="epson">Epson TM-T20III Thermal Printer</option>
            <option value="star">Star Micronics TSP143III Receipt Printer</option>
            <option value="Bixolon">Bixolon SRP-350III Direct Thermal Printer</option>
          </select>
          <br/>

          <h2 className="text-lg"><b>Business Information</b></h2>
          <input className="bg-gray-50 block text-gray-900 text-sm rounded-lg p-2.5 border border-gray-300" type="text" value="Coffee Shop"/>
          <br/>

          <h2 className="text-lg"><b>Connectivity</b></h2>
          <button className="text-white bg-blue-700 hover:bg-blue-600  px-10 py-2 rounded-lg" onClick={handleScan}>Scan and Connect</button>
          <p className="text-sm mt-2">
            {isConnected ? (
            <><b className="text-emerald-600">Connected: </b>coffee_POS_5G</>
          ) : (
            <b className="text-red-600">Disconnected!!</b>
          )}
          </p>
        </div>
    </div>
  )
}

export default Settings