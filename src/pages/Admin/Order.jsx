import { set } from "date-fns";
import React, { useEffect, useState } from "react";
import { getOrderList } from "../../api/bookings";

const Order = () => {
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setLoading(true);
    getOrderList()
      .then((data) => {
        console.log("Order Data:", data);
        setOrders(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-medium text-[#0C0C0C] bg-white p-5">
        Order list
      </h1>

      <div className="p-20">
        <table className="w-full table-auto">
          <thead className="bg-gray-50">
            <tr>
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">Email ID</th>
              <th className="border px-4 py-2">Service</th>
              <th className="border px-4 py-2">Price</th>
              <th className="border px-4 py-2">Status</th>
              <th className="border px-4 py-2">Customer</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{order.bookedItemId}</td>
                <td className="border px-4 py-2">{order.email}</td>
                <td className="border px-4 py-2">{order.name}</td>
                <td className="border px-4 py-2">$ {order.price}</td>
                <td className="border px-4 py-2">{order.status}</td>
                <td className="border px-4 py-2">{order._id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;
