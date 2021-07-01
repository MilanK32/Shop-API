import React from "react";
import ShopItem from "./ShopItem";
import "./ShopList.css";

const ShopList = (props) => {
  return (
    <div className="overflow-x-auto">
      <div className="min-w-screen min-h-screen flex justify-center font-sans overflow-hidden">
        <div className="h-1/2 w-1/2 my-32">
          <div className="bg-white shadow-md rounded">
            <table className="min-w-max w-full table-auto">
              <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">Shop Name</th>
                  <th className="py-3 px-6 text-left">Address</th>
                  <th className="py-3 px-6 text-center">City</th>
                  <th className="py-3 px-6 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {props.shops.map((shop) => (
                  <ShopItem key={shop._id} shop={shop} />
                ))}
              </tbody>
            </table>
          </div>
          <button className="bg-purple-500 hover:bg-purple-600 transition-all duration-200 text-white font-bold py-2 px-4 rounded mt-5">
            Add New Shop
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopList;
