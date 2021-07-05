import React from "react";
import { NavLink } from "react-router-dom";
import VisibilityIcon from "@material-ui/icons/Visibility";

const Category = (props) => {
  return (
    <tr className='border-b border-gray-200 hover:bg-gray-100'>
      <td className='py-3 px-6 text-left whitespace-nowrap'>
        <span className='font-medium'>{props.category.name}</span>
      </td>
      <td className='py-3 px-6 text-left'>
        <span className='font-medium'>{props.category.description}</span>
      </td>
      <td className='py-3 px-6'>
        <NavLink to={`/categories/${props.category._id}`}>
          <VisibilityIcon className='cursor-pointer hover:text-gray-500' />
        </NavLink>
      </td>
    </tr>
  );
};

export default Category;
