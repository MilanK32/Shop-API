import React from "react";
import VisibilityIcon from "@material-ui/icons/Visibility";

const Shop = (props) => {
  return (
    <tr className='border-b border-gray-200 hover:bg-gray-100'>
      <td className='py-3 px-6 text-left whitespace-nowrap'>
        <span className='font-medium'>{props.shop.name}</span>
      </td>
      <td className='py-3 px-6 text-left'>
        <span className='font-medium'>{props.shop.address}</span>
      </td>
      <td className='py-3 px-6 text-center'>
        <span className='font-medium'>{props.shop.city}</span>
      </td>
      <td className='py-3 px-6 text-center'>
        <a
          href={`/shops/${props.shop._id}`}
          className='text-gray-400 hover:text-gray-100 mr-2'
        >
          <VisibilityIcon className='hover:text-gray-500' />
        </a>
      </td>
    </tr>
  );
};

export default Shop;
