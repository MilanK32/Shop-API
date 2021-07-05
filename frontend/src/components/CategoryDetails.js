import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CategoryDetails = (props) => {
  let { id } = useParams();
  const [category, setCategory] = useState({});

  useEffect(() => {
    fetch(`http://localhost:8080/api/categories/${id}`)
      .then((response) => response.json())
      .then((result) => setCategory(result))
      .catch((err) => console.log(err));
  }, [id]);
  return <h1>{category.name}</h1>;
};

export default CategoryDetails;
