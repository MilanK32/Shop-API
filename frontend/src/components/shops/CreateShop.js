import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import config from "../../config";

const CreateShop = () => {
  const shopNameRef = useRef("");
  const shopAddressRef = useRef("");
  const shopCityRef = useRef("");
  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();

    const shop = {
      shopName: shopNameRef.current.value,
      shopAddress: shopAddressRef.current.value,
      shopCity: shopCityRef.current.value,
    };

    fetch(`${config.awsApi}/shops`, {
      method: "POST",
      body: JSON.stringify(shop),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        response.json();
        history.push("/shops");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="w-2/5 m-auto">
      <h1 className="text-center text-3xl py-10">New Shop</h1>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={submitHandler}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="shopName"
          >
            Shop Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="shopName"
            type="text"
            ref={shopNameRef}
            placeholder="Shop name"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="shopAddress"
          >
            Address
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="shopAddress"
            type="text"
            ref={shopAddressRef}
            placeholder="Shop address"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="shopCity"
          >
            City
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="shopCity"
            type="text"
            ref={shopCityRef}
            placeholder="Shop city"
          />
        </div>
        <button className="bg-purple-500 hover:bg-purple-600 transition-all duration-200 text-white font-bold py-2 px-4 rounded mt-5">
          Add
        </button>
      </form>
    </div>
  );
};

export default CreateShop;
