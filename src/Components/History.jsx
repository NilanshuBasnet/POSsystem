import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const History = () => {
  const { history } = useContext(UserContext);
  return (
    <div className="h-screen p-7 bg-[#F9FAFC]">
        <h1 className="text-3xl"><b>History</b></h1>
        <p className="text-sm text-gray-500 mb-3">Get your sales history here</p><hr/>

        <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b">Receipt Number</th>
            <th className="px-4 py-2 border-b">Date</th>
            <th className="px-4 py-2 border-b">Time</th>
            <th className="px-4 py-2 border-b">Items</th>
            <th className="px-4 py-2 border-b">Total Price</th>
          </tr>
        </thead>
        <tbody>
          {history.length > 0 ? (
            history.map((purchase, index) => (
              <tr key={index}>
                <td className="px-4 py-2 border-b">{purchase.receiptNumber}</td>
                <td className="px-4 py-2 border-b">{purchase.date}</td>
                <td className="px-4 py-2 border-b">{purchase.time}</td>
                <td className="px-4 py-2 border-b">
                  {purchase.items.map((item, i) => (
                    <div key={i}>
                      {item.name} ({item.size}) - ${item.price}
                    </div>
                  ))}
                </td>
                <td className="px-4 py-2 border-b">${purchase.totalPrice}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center px-4 py-2">No purchase history found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default History