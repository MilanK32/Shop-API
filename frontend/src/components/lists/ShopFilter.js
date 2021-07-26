import React, { useEffect, useState } from "react";
import config from "../../config";

const ShopFilter = (props) => {
  const [shops, setShops] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);

  useEffect(() => {
    fetch(`${config.awsApi}/shops`)
      .then((response) => response.json())
      .then((result) => {
        setShops(result);
      })
      .catch((err) => console.log(err));
  }, [isFiltered]);

  const shopFilterHandler = (e) => {
    setIsFiltered(true);
    props.onShopFilter(e.target.value);
  };

  const clearFilter = () => {
    setIsFiltered(false);
    props.onShopFilter("");
  };

  return (
    <div className="my-6 mr-2 py-4 w-1/5">
      <div className="relative self-center ">
        <span className="text-lg">Filter By Shop</span>
        <div className="mt-1 min-w-max rounded transition delay-75 ease-in-out z-10">
          <select
            className="bg-white appearance-none border-none inline-block py-3 pl-3 pr-8 rounded leading-tight w-full"
            onChange={shopFilterHandler}
          >
            {shops.map((shop) => (
              <option key={shop.id} className="pt-6" value={shop.id}>
                {shop.name}
              </option>
            ))}
          </select>
        </div>
        {isFiltered && (
          <div className="w-full text-center pt-4">
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
