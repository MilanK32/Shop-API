import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CreateItemModal from "../items/CreateItemModal";
import Item from "../items/Item";

const ListDetails = () => {
  const [list, setList] = useState({});
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let { listId } = useParams();

  const getList = useCallback(() => {
    fetch(`http://localhost:8080/api/lists/${listId}`)
      .then((response) => response.json())
      .then((result) => {
        setList(result);
        return fetch(`http://localhost:8080/api/lists/${listId}/items`);
      })
      .then((response) => response.json())
      .then((result) => {
        setItems(result);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  }, [listId]);

  useEffect(() => {
    getList();
  }, [getList]);

  const onDeleteItemHandler = (itemId) => {
    if (window.confirm("Item will be deleted. Proceed?")) {
      fetch(`http://localhost:8080/api/lists/${listId}/items/${itemId}`, {
        method: "DELETE",
      })
        .then((result) => {
          getList();
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div>
      {isLoading && <p className='text-center'>Loading...</p>}
      {!isLoading && (
        <div className='mt-16'>
          <h2 className='my-6 text-center text-2xl font-semibold text-gray-700'>
            List Details
          </h2>
          <div className='max-w-3xl bg-white w-full rounded-lg shadow-xl mx-auto'>
            <div className='p-4'>
              <h2 className='text-2xl '>{list.name}</h2>
              <p className='text-sm text-gray-500'>List details and items.</p>
            </div>
            <div>
              <div className='md:grid md:grid-cols-2 md:space-y-0 space-y-1 p-6 border-t'>
                <p className='text-gray-600'>Shop</p>
                <p>{list.shop.name}</p>
              </div>
              <div className='md:grid md:grid-cols-2 md:space-y-0 space-y-1 p-6 border-t'>
                <p className='text-gray-600'>List Items</p>
                <div>
                  {items.map((item) => (
                    <Item
                      key={item._id}
                      listId={list._id}
                      item={item}
                      onDeleteItem={onDeleteItemHandler}
                      onItemUpdate={getList}
                    />
                  ))}
                  <CreateItemModal
                    list={list}
                    onItemSubmit={getList}
                    onGetLists={getList}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListDetails;
