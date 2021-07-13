import React, { useState } from "react";
import ItemDetailsModal from "../items/ItemDetailsModal";
import EditItemModal from "./EditItemModal";
import VisibilityIcon from "@material-ui/icons/Visibility";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";

const Item = (props) => {
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const deleteItem = () => {
    props.onDeleteItem(props.item._id);
  };

  const toggleDetailsModalHandler = () => {
    setShowDetailsModal(!showDetailsModal);
  };

  const toggleEditModalHandler = () => {
    setShowEditModal(!showEditModal);
  };

  return (
    <div className="block">
      <div className="text-md flex justify-between">
        <div className="flex">
          <div className="pb-4">
            <span className="mr-1 font-light">{props.item.name}</span>
          </div>
          <span className="">-</span>
          <div className="pb-4">
            <span className="ml-1 font-light">{props.item.quantity}x</span>
          </div>
        </div>
        <div className="mx-2 flex">
          <VisibilityIcon
            fontSize="small"
            className="mx-1 cursor-pointer hover:text-gray-500"
            onClick={toggleDetailsModalHandler}
          />
          <EditIcon
            fontSize="small"
            className="mx-2 cursor-pointer hover:text-gray-500"
            onClick={toggleEditModalHandler}
          />
          <DeleteForeverOutlinedIcon
            fontSize="small"
            className="mx-1 text-red-600 cursor-pointer hover:text-red-500"
            onClick={deleteItem}
          />
        </div>
      </div>
      <ItemDetailsModal
        listId={props.listId}
        item={props.item}
        showDetailsModal={showDetailsModal}
        onToggleModal={toggleDetailsModalHandler}
      />
      <EditItemModal
        listId={props.listId}
        itemId={props.item._id}
        showEditModal={showEditModal}
        onToggleModal={toggleEditModalHandler}
        onItemUpdate={props.onItemUpdate}
      />
    </div>
  );
};

export default Item;
