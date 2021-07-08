import React, { useEffect, useState } from "react";

const ItemDetailsModal = (props) => {
  const [item, setItem] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (props.showDetailsModal) {
      fetch(
        `http://localhost:8080/api/lists/${props.listId}/items/${props.item._id}`
      )
        .then((response) => response.json())
        .then((result) => {
          setItem(result);
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);
          console.log(err);
        });
    }
  }, [props.listId, props.item._id, props.showDetailsModal]);

  return (
    <div>
      {!props.showDetailsModal && isLoading && null}
      {props.showDetailsModal && !isLoading && (
        <div>
          <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
            <div className='relative w-1/3 my-6 mx-auto max-w-3xl'>
              {/*content*/}
              <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                {/*header*/}
                <div className='flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t'>
                  <h3 className='text-3xl font-semibold'>{item.name}</h3>
                  <button
                    className='p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none'
                    onClick={props.onToggleModal}
                  >
                    <span className='bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none'>
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className='py-2 px-8'>
                  <p className='text-lg font-semibold my-2'>Category:</p>
                  <span className='text-sm font-light'>
                    {item.category.name}
                  </span>
                </div>
                <div className='py-2 px-8'>
                  <p className='text-lg font-semibold my-2'>Quantity:</p>
                  <span className='text-sm font-light'>{item.quantity}</span>
                </div>
                {/*footer*/}
                <div className='flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b'>
                  <button
                    className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                    type='button'
                    onClick={props.onToggleModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='opacity-70 fixed inset-0 z-40 bg-black'></div>
        </div>
      )}
    </div>
  );
};

export default ItemDetailsModal;
