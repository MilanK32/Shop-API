import React, { useEffect, useState } from "react";
// import config from "../../config";

const CategoryFilter = (props) => {
  const [categories, setCategories] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);

  useEffect(() => {
    fetch(
      "https://5ji94prlsb.execute-api.us-east-2.amazonaws.com/dev/categories"
    )
      .then((response) => response.json())
      .then((result) => {
        setCategories(result);
      })
      .catch((err) => console.log(err));
  }, [isFiltered]);

  const categoryFilterHandler = (e) => {
    setIsFiltered(true);
    props.onCategoryFilter(e.target.value);
  };

  const clearFilter = () => {
    setIsFiltered(false);
    props.onCategoryFilter("");
  };

  return (
    <div className="my-6 ml-2 py-4 w-1/5">
      <div className="relative self-center">
        <span className="text-lg">Filter By Category</span>
        <div className="mt-1 min-w-max rounded transition delay-75 ease-in-out z-10">
          <select
            className="bg-white appearance-none border-none inline-block py-3 pl-3 pr-8 rounded leading-tight w-full"
            onChange={categoryFilterHandler}
          >
            {categories.map((category) => (
              <option key={category._id} className="pt-6" value={category._id}>
                {category.name}
              </option>
            ))}
          </select>
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
    </div>
  );
};

export default CategoryFilter;
