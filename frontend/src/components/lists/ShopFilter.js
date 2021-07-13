import React, { useEffect, useState } from "react";
import config from "../../config";

const ShopFilter = (props) => {
  const [shops, setShops] = useState([]);
  const [selectedShop, setSelectedShop] = useState("");
  const [isFiltered, setIsFiltered] = useState(false);

  useEffect(() => {
    fetch(config.shopsURL)
      .then((response) => response.json())
      .then((result) => {
        setShops(result);
      })
      .catch((err) => console.log(err));
  }, [isFiltered]);

  const shopFilterHandler = (e) => {
    setIsFiltered(true);
    setSelectedShop(e.target.value);
    props.onShopFilter(e.target.value);
  };

  const clearFilter = () => {
    setIsFiltered(false);
    setSelectedShop("");
    props.onShopFilter("");
  };

  return (
    <div className="my-6 mr-2 py-4 px-6 bg-white shadow-lg rounded-lg w-full">
      <div className="relative self-center ">
        <span className="text-lg">Filter By Shop</span>

        <div className="mt-1 min-w-max rounded transition delay-75 ease-in-out z-10">
          <div className="grid grid-cols-3">
            {shops.map((shop) => (
              <label
                key={shop._id}
                className="flex radio p-2 cursor-pointer items-center mt-3 px-2"
              >
                <input
                  type="radio"
                  className="my-auto transform scale-125"
                  value={shop._id}
                  name="shop"
                  checked={selectedShop === shop._id}
                  onChange={shopFilterHandler}
                />

                <span className="ml-2 text-gray-700">{shop.name}</span>
              </label>
            ))}
          </div>
        </div>
        {isFiltered && (
          <div className="w-full text-center">
            <span
              className="cursor-pointer underline px-4"
              onClick={clearFilter}
            >
              Clear Filter
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopFilter;
