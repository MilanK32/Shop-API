import React, { useState } from "react";
import CategoryDetailsModal from "./CategoryDetailsModal";
import VisibilityIcon from "@material-ui/icons/Visibility";

const Category = (props) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModalHandler = () => {
    setShowModal(!showModal);
  };

  return (
    <tr className="border-b border-gray-200 hover:bg-gray-100">
      <td className="py-3 px-6 text-left whitespace-nowrap">
        <span className="font-medium">{props.category.name}</span>
      </td>
      <td className="py-3 px-6 text-left">
        <span className="font-medium">{props.category.description}</span>
      </td>
      <td className="flex py-3 px-6">
        <VisibilityIcon
          className="cursor-pointer hover:text-gray-500 mx-2"
          onClick={toggleModalHandler}
        />
        <CategoryDetailsModal
          category={props.category}
          onToggleModal={toggleModalHandler}
          showModal={showModal}
        />
      </td>
    </tr>
  );
};

export default Category;
