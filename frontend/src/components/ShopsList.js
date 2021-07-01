import React from "react";
import ShopItem from "./ShopItem";
import "./ShopList.css";

const ShopList = (props) => {
  return (
    <div className='shop-list'>
      <h1 className='shop-list_title'>Shop List</h1>
      <table className='shop-table'>
        <thead>
          <tr>
            <th>Shop Name</th>
            <th>Shop Address</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {props.shops.map((shop) => (
            <ShopItem key={shop._id} shop={shop} />
          ))}
        </tbody>
      </table>
      <button className='shop-list__btn'>Add New Shop</button>
    </div>
  );
};

export default ShopList;
