import React from "react";
import Card from "../UI/Card";

const Home = (props) => {
  return (
    <div className='container px-6 mx-auto grid mt-16'>
      <h2 className='my-6 text-center text-2xl font-semibold text-gray-700'>
        Dashboard
      </h2>
      <Card data={props} />
    </div>
  );
};

export default Home;
