import React, { useState } from "react";
import ShopDetailsModal from "./ShopDetailsModal";
import VisibilityIcon from "@material-ui/icons/Visibility";

const Shop = (props) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModalHandler = () => {
    setShowModal(!showModal);
  };

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
        <VisibilityIcon
          className='cursor-pointer hover:text-gray-500 mx-2'
          onClick={toggleModalHandler}
        />
        <ShopDetailsModal
          shop={props.shop}
          onToggleModal={toggleModalHandler}
          showModal={showModal}
        />
      </td>
    </tr>
  );
};

export default Shop;
