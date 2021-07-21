import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
// import config from "../../config";

const CreateCategory = () => {
  const categoryNameRef = useRef("");
  const categoryDescriptionRef = useRef("");
  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();

    const category = {
      categoryName: categoryNameRef.current.value,
      categoryDescription: categoryDescriptionRef.current.value,
    };

    fetch(
      "https://5ji94prlsb.execute-api.us-east-2.amazonaws.com/dev/categories",
      {
        method: "POST",
        body: JSON.stringify(category),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        response.json();
        history.push("/categories");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="w-2/5 m-auto">
      <h1 className="text-center text-3xl py-10">New Category</h1>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={submitHandler}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="categoryName"
          >
            Category Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="categoryName"
            type="text"
            ref={categoryNameRef}
            placeholder="Category name"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="categoryDescription"
          >
            Description
          </label>
          <textarea
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none resize-none"
            rows="4"
            id="categoryDescription"
            ref={categoryDescriptionRef}
            placeholder="Category description"
          />
        </div>
        <button className="bg-purple-500 hover:bg-purple-600 transition-all duration-200 text-white font-bold py-2 px-4 rounded mt-5">
          Add
        </button>
      </form>
    </div>
  );
};

export default CreateCategory;
