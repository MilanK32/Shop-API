import React, { useEffect, useRef, useState } from "react";
import config from "../../config";

const CreateItemModal = (props) => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const itemNameRef = useRef("");
  const itemCategoryRef = useRef({});
  const itemQuantityRef = useRef("");

  useEffect(() => {
    if (showModal) {
      getCategories();
    }
  }, [showModal]);

  const getCategories = () => {
    fetch(config.categoriesURL)
      .then((response) => response.json())
      .then((result) => {
        setCategories(result);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const item = {
      itemName: itemNameRef.current.value,
      itemCategory: itemCategoryRef.current.value,
      itemQuantity: itemQuantityRef.current.value,
    };

    fetch(`${config.listsURL}/${props.list._id}/items`, {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        response.json();
        props.onItemSubmit();
        setShowModal(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <button
        className="inline-block transition-all duration-200 text-sm text-purple-600 font-bold pb-2 rounded"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Add New Item
      </button>
      {!showModal && isLoading && null}
      {showModal && !isLoading && (
        <div>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-1/3 my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">{props.list.name}</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <form className="bg-white px-8 py-6" onSubmit={submitHandler}>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="itemName"
                    >
                      Item Name
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="itemName"
                      type="text"
                      placeholder="Item name"
                      ref={itemNameRef}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="itemCategory"
                    >
                      Category
                    </label>
                    <select
                      className="block bg-white appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white"
                      id="itemCategory"
                      ref={itemCategoryRef}
                    >
                      {categories.map((category) => (
                        <option key={category._id} value={category._id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="itemQuantity"
                    >
                      Quantity
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="itemQuantity"
                      type="number"
                      ref={itemQuantityRef}
                      placeholder="Quantity"
                    />
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button className="bg-purple-500 hover:bg-purple-600 transition-all duration-200 text-white font-bold py-2 px-4 rounded">
                      Add
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="opacity-70 fixed inset-0 z-40 bg-black"></div>
        </div>
      )}
    </div>
  );
};

export default CreateItemModal;
