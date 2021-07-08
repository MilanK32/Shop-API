import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

const EditList = () => {
  const [list, setList] = useState({});
  const [shops, setShops] = useState([]);
  const listNameRef = useRef("");
  const listShopRef = useRef("");
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8080/api/lists/${id}`)
      .then((response) => response.json())
      .then((result) => {
        setList(result);
        return fetch("http://localhost:8080/api/shops");
      })
      .then((response) => response.json())
      .then((result) => {
        setShops(result);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  }, [id]);

  const submitHandler = (e) => {
    e.preventDefault();

    const list = {
      listName: listNameRef.current.value,
      listShop: listShopRef.current.value,
    };

    fetch(`http://localhost:8080/api/lists/${id}`, {
      method: "PUT",
      body: JSON.stringify(list),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        response.json();
        window.location.replace("/lists");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='w-2/5 m-auto'>
      <h1 className='text-center text-3xl py-10'>Update List</h1>
      {isLoading && null}
      {!isLoading && (
        <form
          className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
          onSubmit={submitHandler}
        >
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='listName'
            >
              List Name
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='listName'
              type='text'
              defaultValue={list.name}
              ref={listNameRef}
              placeholder='List name'
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='listShop'
            >
              Shop
            </label>
            <select
              className='block bg-white appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white'
              id='listShop'
              ref={listShopRef}
              defaultValue={list.shop._id}
            >
              {shops.map((shop) => (
                <option key={shop._id} value={shop._id}>
                  {shop.name}
                </option>
              ))}
            </select>
          </div>
          <button className='bg-purple-500 hover:bg-purple-600 transition-all duration-200 text-white font-bold py-2 px-4 rounded mt-5'>
            Update
          </button>
        </form>
      )}
    </div>
  );
};

export default EditList;
