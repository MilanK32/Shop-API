import React from "react";
import { NavLink } from "react-router-dom";
import List from "./List";

const Lists = (props) => {
  return (
    <div className='container px-6 mx-auto grid mt-16'>
      <h2 className='my-6 text-center text-2xl font-semibold text-gray-700'>
        Lists
      </h2>
      <div className='overflow-x-auto'>
        <div className='min-w-screen flex justify-center font-sans overflow-hidden'>
          <div className='h-1/2 w-2/3'>
            <div className='bg-white shadow-md rounded'>
              <table className='min-w-max w-full table-auto'>
                <thead>
                  <tr className='bg-gray-200 text-gray-600 uppercase text-sm leading-normal'>
                    <th className='py-3 px-6 text-left'>List Name</th>
                    <th className='py-3 px-6 text-left'>Shop</th>
                    <th className='py-3 px-6 text-center'>Items</th>
                    <th className='py-3 px-6 text-center'>Actions</th>
                  </tr>
                </thead>
                <tbody className='text-gray-600 text-sm font-light'>
                  {props.lists.map((list) => (
                    <List key={list._id} list={list} />
                  ))}
                </tbody>
              </table>
            </div>
            <NavLink
              to='/lists/new'
              className='inline-block bg-purple-500 hover:bg-purple-600 transition-all duration-200 text-white font-bold py-2 px-4 rounded mt-5'
            >
              Add New List
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lists;
