import React from "react";
import TopBar from "./TopBar";
import Cards from "./Cards";

const Dashboard = () => {
  return (
    <div className="bg-[#F9FAFC] w-full h-screen flex flex-col">
      <div className="flex-shrink-0">
        <TopBar />
      </div>
      <div className="flex flex-grow overflow-hidden">
        <div className="w-3/4 flex flex-wrap gap-5 p-5 items-start overflow-y-auto">
          <Cards name="Mocha" img="https://cdn.pixabay.com/photo/2020/08/21/04/10/latte-5505202_960_720.jpg"/>
          <Cards name="Latte" img="https://cdn.pixabay.com/photo/2016/08/03/05/33/latte-1565931_960_720.jpg" />
          <Cards name="Espresso" img="https://cdn.pixabay.com/photo/2019/07/13/11/44/coffee-4334647_1280.jpg"/>
          <Cards name="Americano" img="https://cdn.pixabay.com/photo/2023/08/07/03/57/coffee-8174257_960_720.jpg" />
          <Cards name="Flat White" img="https://cdn.pixabay.com/photo/2016/08/03/05/26/flat-white-1565912_960_720.jpg" />
          <Cards name="Iced Coffee" img="https://cdn.pixabay.com/photo/2021/01/06/10/11/coffee-5893926_960_720.jpg" />
          
        </div>
        <div className="border border-gr w-1/4 bg-white  p-5">
          <h1 className="text-lg"><b>Bill</b></h1>
          <hr class="border-t-2 border-dotted border-gray-400 my-4"/>
          <p>Total: </p>
          <hr/>
          <button className="text-white bg-[#01B763] hover:bg-[#02D77C] px-4 py-2 rounded-lg w-full mt-4 mb-4">Charge</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
