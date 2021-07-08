import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Shop from "./Shop";

const ShopList = () => {
  const [shops, setShops] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8080/api/shops")
      .then((response) => response.json())
      .then((result) => {
        setShops(result);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  }, []);
  return (
    <div className='container px-6 mx-auto grid mt-16'>
      <h2 className='my-6 text-center text-2xl font-semibold text-gray-700'>
        Shops
      </h2>
      {isLoading && <p className='text-center'>Loading...</p>}
      {!isLoading && (
        <div className='overflow-x-auto'>
          <div className='min-w-screen flex justify-center font-sans overflow-hidden'>
            <div className='h-1/2 w-2/3'>
              <div className='bg-white shadow-md rounded'>
                <table className='min-w-max w-full table-auto'>
                  <thead>
                    <tr className='bg-gray-200 text-gray-600 uppercase text-sm leading-normal'>
                      <th className='py-3 px-6 text-left'>Shop Name</th>
                      <th className='py-3 px-6 text-left'>Address</th>
                      <th className='py-3 px-6 text-center'>City</th>
                      <th className='py-3 px-6 text-center'>Actions</th>
                    </tr>
                  </thead>
                  <tbody className='text-gray-600 text-sm font-light'>
                    {shops.map((shop) => (
                      <Shop key={shop._id} shop={shop} />
                    ))}
                  </tbody>
                </table>
              </div>
              <NavLink
                to='/shops/new'
                className='inline-block bg-purple-500 hover:bg-purple-600 transition-all duration-200 text-white font-bold py-2 px-4 rounded mt-5'
              >
                Add New Shop
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShopList;
