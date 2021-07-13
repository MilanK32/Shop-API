import React, { useEffect, useState } from "react";
import Category from "./Category";
import { NavLink } from "react-router-dom";
import config from "../../config";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
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
  }, []);

  return (
    <div className="container px-6 pb-4 mx-auto grid mt-16">
      <h2 className="my-6 text-center text-2xl font-semibold text-gray-700">
        Categories
      </h2>
      {isLoading && <p className="text-center">Loading...</p>}
      {!isLoading && (
        <div className="overflow-x-auto">
          <div className="min-w-screen flex justify-center font-sans overflow-hidden">
            <div className="h-1/2 w-2/3">
              <div className="bg-white shadow-md rounded">
                <table className="min-w-max w-full table-auto">
                  <thead>
                    <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                      <th className="py-3 px-6 text-left">Category Name</th>
                      <th className="py-3 px-6 text-left">Description</th>
                      <th className="py-3 px-6 text-left">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 text-sm font-light">
                    {categories.map((category) => (
                      <Category key={category._id} category={category} />
                    ))}
                  </tbody>
                </table>
              </div>
              <NavLink
                to="/categories/new"
                className="inline-block bg-purple-500 hover:bg-purple-600 transition-all duration-200 text-white font-bold py-2 px-4 rounded mt-5"
              >
                Add New Category
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryList;
