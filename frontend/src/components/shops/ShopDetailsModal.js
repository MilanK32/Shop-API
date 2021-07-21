import React, { useEffect, useState } from "react";
// import config from "../../config";

const ShopDetailsModal = (props) => {
  const [shop, setShop] = useState({});

  useEffect(() => {
    if (props.showModal) {
      fetch(
        `https://5ji94prlsb.execute-api.us-east-2.amazonaws.com/dev/shops/${props.shop._id}`
      )
        .then((response) => response.json())
        .then((result) => setShop(result))
        .catch((err) => console.log(err));
    }
  }, [props.shop._id, props.showModal]);

  return (
    <div>
      {!props.showModal && null}
      {props.showModal && (
        <div>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-1/4 my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">{shop.name}</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={props.onToggleModal}
                  >
                    <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="text-left">
                  <div className="py-2 px-8">
                    <p className="text-lg font-semibold my-2">Address:</p>
                    <span className="text-sm font-light">{shop.address}</span>
                  </div>
                  <div className="py-2 px-8">
                    <p className="text-lg font-semibold my-2">City:</p>
                    <span className="text-sm font-light">{shop.city}</span>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={props.onToggleModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-70 fixed inset-0 z-40 bg-black"></div>
        </div>
      )}
    </div>
  );
};

export default ShopDetailsModal;
