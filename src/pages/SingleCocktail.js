import React from "react";
import { useParams } from "react-router-dom";

const SingleCocktail = (props) => {
  const { id } = useParams();
  console.log(id);

  return (
    <div>
      <h1>SingleCocktail: {id}</h1>
    </div>
  );
};

export default SingleCocktail;
