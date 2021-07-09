import React, { useEffect, useRef, useState } from "react";

const ShopFilter = () => {
  const [shops, setShops] = useState([]);
  // const [isFiltered, setIsFiltered] = useState(false);
  const [selectedShop, setSelectedShop] = useState("");
  // const shopFilterRef = useRef("");

  useEffect(() => {
    fetch("http://localhost:8080/api/shops")
      .then((response) => response.json())
      .then((result) => {
        setShops(result);
      })
      .catch((err) => console.log(err));
  }, [selectedShop]);

  // const clearFilter = () => {
  //   setIsFiltered(false);
  // };

  // const filterLists = () => {
  //   setIsFiltered(true);
  // };
  const radioHandler = (e) => {
    setSelectedShop(e.target.value);
  };

  const shopFilterHandler = () => {
    const urlFilter = `?shop=${selectedShop}`;
    console.log(urlFilter);
  };

  return (
    <div className='my-6 mr-2 py-4 px-6 bg-white shadow-lg rounded-lg w-full'>
      <div className='relative self-center '>
        <span className='text-lg'>Filter By Shop</span>
        {/* <span className='cursor-pointer px-4' onClick={clearFilter}>
          Clear Filter
        </span> */}
        <div className='mt-1 min-w-max rounded transition delay-75 ease-in-out z-10'>
          <div className='grid grid-cols-3'>
            {shops.map((shop) => (
              <label
                key={shop._id}
                className='flex radio p-2 cursor-pointer items-center mt-3 px-2'
              >
                <input
                  type='radio'
                  className='my-auto transform scale-125'
                  value={shop.name}
                  name='shop'
                  onChange={radioHandler}
                />
                <span className='ml-2 text-gray-700'>{shop.name}</span>
              </label>
            ))}
          </div>
        </div>
        <button
          className='bg-purple-500 hover:bg-purple-600 transition-all 
        duration-200 text-white font-bold py-2 px-4 rounded mt-5 text-xs'
          onClick={shopFilterHandler}
        >
          Filter
        </button>
      </div>
    </div>
  );
};

export default ShopFilter;
