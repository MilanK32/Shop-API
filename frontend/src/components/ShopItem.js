import React from "react";

const ShopItem = (props) => {
  return (
    <tr>
      <td>
        <a href={`/shops/${props.shop._id}`}>{props.shop.name}</a>
      </td>
      <td>{props.shop.address}</td>
      <td>{props.shop.city}</td>
    </tr>
  );
};

export default ShopItem;
