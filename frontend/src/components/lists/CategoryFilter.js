import React, { useEffect, useState } from "react";

const CategoryFilter = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/categories")
      .then((response) => response.json())
      .then((result) => {
        setCategories(result);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='my-6 ml-2 py-4 px-6 bg-white shadow-lg rounded-lg w-full'>
      <div className='relative self-center'>
        <span className='text-lg'>Filter By Category</span>
        <div className='mt-1 min-w-max rounded transition delay-75 ease-in-out z-10'>
          <div className='grid grid-cols-3'>
            {categories.map((category) => (
              <label
                key={category._id}
                className='flex radio p-2 cursor-pointer items-center mt-3 px-2'
              >
                <input
                  type='radio'
                  className='my-auto transform scale-125'
                  name='category'
                />
                <span className='ml-2 text-gray-700'>{category.name}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
