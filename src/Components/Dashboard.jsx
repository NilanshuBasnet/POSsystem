import React, { useContext } from "react";
import TopBar from "./TopBar";
import Cards from "./Cards";
import { UserContext } from '../context/UserContext';

const Dashboard = () => {
  const {cart, clearCart} = useContext(UserContext);
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  // Handle charge button click
  const handleCharge = () => {
    if (cart.length === 0) {
      alert("Cart is empty!");
    } else {
      alert("Approved.");
      clearCart(); // Clear the cart
    }
  };

  return (
    <div className="bg-[#F9FAFC] w-full h-screen flex flex-col">
      <div className="flex-shrink-0">
        <TopBar />
      </div>
      <div className="flex flex-grow overflow-hidden">
        <div className="w-3/4 flex flex-wrap gap-5 p-5 items-start overflow-y-auto">
          <Cards name="Mocha" img="https://cdn.pixabay.com/photo/2020/08/21/04/10/latte-5505202_960_720.jpg" regular={4} large ={6}/>
          <Cards name="Latte" img="https://cdn.pixabay.com/photo/2016/08/03/05/33/latte-1565931_960_720.jpg" regular={4} large ={6}/>
          <Cards name="Espresso" img="https://cdn.pixabay.com/photo/2019/07/13/11/44/coffee-4334647_1280.jpg" regular={4} large ={6}/>
          <Cards name="Americano" img="https://cdn.pixabay.com/photo/2023/08/07/03/57/coffee-8174257_960_720.jpg" regular={4} large ={6}/>
          <Cards name="Flat White" img="https://cdn.pixabay.com/photo/2016/08/03/05/26/flat-white-1565912_960_720.jpg" regular={4} large ={6}/>
          <Cards name="Iced Coffee" img="https://cdn.pixabay.com/photo/2021/01/06/10/11/coffee-5893926_960_720.jpg" regular={4} large ={6}/>
          
        </div>
        <div className="border border-gray-300 w-1/4 bg-white p-5">
          <h1 className="text-lg font-bold mb-4">Bill</h1>
          <hr/>
          
          {/* Scrollable Cart Items */}
          <div className="overflow-y-auto h-[65%] pr-2">
            {cart.length > 0 ? (
              cart.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center mb-4 border-b border-gray-300 pb-2"
                >
                  <div>
                    <h2 className="text-lg font-bold">{item.name}</h2>
                    <p className="text-sm text-gray-600">{item.size}</p>
                  </div>
                  <p className="text-sm text-gray-800">${item.price}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-600">Cart is empty</p>
            )}
          </div>
          <hr className="border-t-2 border-dotted border-gray-400 my-4" />
          <p className="flex justify-between">
            <b>Total:</b>
            <span className="text-[#01B763] text-lg">${totalPrice}</span>
          </p>
          <hr/>
          <button className="text-white bg-[#01B763] hover:bg-[#02D77C] px-4 py-2 rounded-lg w-full mt-4 mb-4" onClick={handleCharge}>Charge</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
