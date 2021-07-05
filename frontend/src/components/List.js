import React from "react";
import VisibilityIcon from "@material-ui/icons/Visibility";

const List = (props) => {
  return (
    <tr className='border-b border-gray-200 hover:bg-gray-100'>
      <td className='py-3 px-6 text-left whitespace-nowrap'>
        <span className='font-medium'>{props.list.name}</span>
      </td>
      <td className='py-3 px-6 text-left'>
        <span className='font-medium'>{props.list.shop.name}</span>
      </td>
      <td className='py-3 px-6 text-center'>
        {props.list.items.map((item) => (
          <span key={item._id} className='font-medium'>
            {item.name}
          </span>
        ))}
      </td>
      <td className='py-3 px-6 text-center'>
        <a
          href={`/lists/${props.list._id}`}
          className='text-gray-400 hover:text-gray-100 mr-2'
        >
          <VisibilityIcon className='hover:text-gray-500' />
        </a>
      </td>
    </tr>
  );
};

export default List;
