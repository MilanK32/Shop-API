import React from "react";
import { NavLink } from "react-router-dom";
import VisibilityIcon from "@material-ui/icons/Visibility";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

const List = (props) => {
  const deleteList = () => {
    props.onDelete(props.list.id);
  };

  return (
    <tr className="border-b border-gray-200 hover:bg-gray-100">
      <td className="py-3 px-6 text-left whitespace-nowrap">
        <span className="font-medium">{props.list.name}</span>
      </td>
      <td className="py-3 px-6 text-left">
        <span className="font-medium">{props.list.shop.name}</span>
      </td>
      <td className="flex justify-center py-3 px-6 text-center">
        <NavLink to={`/lists/${props.list.id}`}>
          <VisibilityIcon className="mx-2 cursor-pointer hover:text-gray-500" />
        </NavLink>
        <NavLink to={`/lists/${props.list.id}/update`}>
          <EditIcon className="mx-2 cursor-pointer hover:text-gray-500" />
        </NavLink>
        <DeleteIcon
          className="mx-2 cursor-pointer hover:text-gray-500"
          onClick={deleteList}
        />
      </td>
    </tr>
  );
};

export default List;
